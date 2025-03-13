import React from 'react'
import { Form, Row, Col, Button, FloatingLabel } from 'react-bootstrap'

const ArtistForm = ({ user }) => {
  return (
    <div>
      <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Stage Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="name" placeholder="MC Such n Such" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Image Url
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="image_url" placeholder="https://example-url.jpg" />
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Bio
        </Form.Label>
        <FloatingLabel controlId="floatingTextarea2" label="Biography">
          <Form.Control
            as="textarea"
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
            <Form.Control type="genre" placeholder="Hip Hop, R&B, Go-Go" />
          </Col>
        </Form.Group>
      </fieldset>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Add</Button>
        </Col>
      </Form.Group>
    </Form>
    </div>
  )
}

export default ArtistForm