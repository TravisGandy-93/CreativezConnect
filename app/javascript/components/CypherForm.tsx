import React, { useState, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';

interface Post {
  id: number;
  content: string;
  // Add other properties as needed
}

interface CypherFormProps {
  addPost: (post: Post) => void;
  userId: number;
  username: string;
}

const CypherForm: React.FC<CypherFormProps> = ({ addPost, userId, username }) => {
  const [newPost, setNewPost] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    fetch('/api/v1/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newPost, user_id: userId, username: username }), // Replace 'User' with the actual username if available
    })
      .then(response => response.json())
      .then(data => {
        addPost(data);
        setNewPost('');
      });
  };

  

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" style={{textAlign: 'center'}} controlId="exampleForm.ControlTextarea1">
        <Form.Control
        as="textarea"
        style={{ width: '100%' }}
        rows={3}
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="What's on your mind?"
        required
        />
      </Form.Group>
      <Button type="submit" size="lg" variant="dark">Post</Button>
    </Form>
  );
}

export default CypherForm;