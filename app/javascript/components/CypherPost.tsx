import React from 'react';
import LikeButton from './Likes';

const CypherPost = ({post}) => {
  return(<>
    <LikeButton likesCount={post.likes_count} type={'post'} id={post.id} />
    <div className="ms-2 me-auto">
      <div className="fw-bold">
        <img 
        className='cypher-image'
        src='https://thumbs.dreamstime.com/b/girl-sombrero-depicting-cowboy-lifestyle-45461994.jpg'
        alt='profile_pic'/>
        <strong style={{color: 'whitesmoke'}} onClick={()=>window.location.href = `/users/${post.user_id}`}>{post.username}:</strong>
      </div>
      <p style={{color: 'whitesmoke'}}>{post.content}</p>
      <small style={{color: 'whitesmoke'}}>{new Date(post.created_at).toLocaleString()}</small>
    </div>
  </>)
}

export default CypherPost