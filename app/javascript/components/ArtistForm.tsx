import React, { useState } from 'react'
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'

const ArtistForm = ({ user, artist }) => {
  const [formData, setFormData] = useState({
    name: artist.name || '',
    art_form: artist.art_form || '',
    image_url: artist.image_url || '',
    bio: artist.bio || '',
    genre: artist.genre || '',
    user_id: user.userId
  });

  const handleChange = (e) => {
    console.log(e.target.name, e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
    const url = artist === '' ? '/artists' : `/artists/${artist.id}/edit`
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken || '',
      },
      body: JSON.stringify({ artist: formData }), // Replace 'User' with the actual username if available
    })
    console.log('Form data submitted:', formData);
    // Add logic to send data to server or process it
  };
  
  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Stage Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="name" name='name' value={formData.name} onChange={handleChange} placeholder="MC Such n Such" />
        </Col>
      </Form.Group>

      <div key={`inline-radio`} className="mb-3">
          <Form.Check
            inline
            label="Musician"
            checked={['musician', 'Musician'].includes(artist.art_form)}
            value={"Musician"}
            onChange={handleChange}
            name="art_form"
            type='radio'
            id={`inline-radio-1`}
          />
          <Form.Check
            inline
            label="Photographer"
            checked={['photographer', 'Photographer'].includes(artist.art_form)}
            value={"Photographer"}
            onChange={handleChange}
            name="art_form"
            type='radio'
            id={`inline-radio-2`}
          />
          <Form.Check
            inline
            label="Cinematographer"
            checked={['cinematographer', 'Cinematographer'].includes(artist.art_form)}
            value={"Cinematographer"}
            onChange={handleChange}
            name="art_form"
            type='radio'
            id={`inline-radio-3`}
          />
      </div>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Image Url
        </Form.Label>
        <Col sm={10}>
          <Form.Control name="image_url" value={formData.image_url} onChange={handleChange} placeholder="https://example-url.jpg" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Bio
        </Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Biography">
          <Form.Control
            as="textarea"
            name='bio'
            value={formData.bio}
            onChange={handleChange}
            placeholder="Leave a short biography/career highlights here"
            style={{ height: '100px' }}
          />
        </FloatingLabel>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label column sm={2}>
            Genre
          </Form.Label>
          <Col sm={10}>
            <Form.Control name="genre" value={formData.genre} onChange={handleChange} placeholder="Hip Hop, R&B, Go-Go" />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">{artist === '' ? 'Add' : 'Update'}</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default ArtistForm