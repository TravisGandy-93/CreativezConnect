import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';
import { ImStarEmpty, ImStarFull } from "react-icons/im";

function FavoriteButton({ type, id, currentUserId, favorites }) {
  const [liked, setLiked] = useState(favorites.includes(currentUserId) || false);

  const fetchFavorite = async () => {
    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
    const response = await fetch(`/${type}s/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({artists_id: id}),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setLiked(true);
  }
  
  const handleLikeClick = async () => {
    if (liked) {
      return
    }
    try {
      await fetchFavorite();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <Badge onClick={handleLikeClick} style={{cursor: 'pointer'}}>
      {liked ?  <ImStarFull /> : <ImStarEmpty />}
    </Badge>
  );
}

export default FavoriteButton;