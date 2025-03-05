import React, { useState, useEffect } from 'react';
import { Badge, ListGroup } from 'react-bootstrap';

export interface Post {
    id: number;
    username: string;
    content: string;
    likes: number;
    created_at: string;
  }

const CypherTimeline = ({ posts }) => {
  console.log(posts)
  return (
    <div>
      <ListGroup as="ul"
      style={{listStyleType: 'none'}}>
      {posts.map(post => (
        <ListGroup.Item
        key={post.id}
        as="li"
        className="d-flex justify-content-between align-items-start"
        style={{marginBottom: '10px', padding: '10px', borderRadius: '10px', backgroundColor: '#f8f9fa'}}
      >
        <Badge style={{float: 'right', backgroundColor: 'light blue'}} bg="primary" pill>
          {post.likes}
        </Badge>
        <div className="ms-2 me-auto">
          <div className="fw-bold">
            <img 
            className='cypher-image'
            src='https://thumbs.dreamstime.com/b/girl-sombrero-depicting-cowboy-lifestyle-45461994.jpg'
            alt='profile_pic'/>
            <strong>{post.username}:</strong>
          </div>
          <p>{post.content}</p>
          <small>{new Date(post.created_at).toLocaleString()}</small>
        </div>
      </ListGroup.Item>
      ))}
      </ListGroup>
    </div>
  );
}

export default CypherTimeline;