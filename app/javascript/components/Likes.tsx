import React, { useEffect, useState } from 'react';
import { Badge } from 'react-bootstrap';

function LikeButton({ likesCount, type, id }) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(likesCount);

  const fetchLikes = async () => {
    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
    const response = await fetch(`/${type}s/${id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({}),
    })

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    setLikes(data);
    setLiked(true);
  }
  
  const handleLikeClick = async () => {
    if (liked) {
      return
    }
    try {
      await fetchLikes();
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <Badge onClick={handleLikeClick} style={{cursor: 'pointer'}}>
      👍 {likes}
    </Badge>
  );
}

export default LikeButton;