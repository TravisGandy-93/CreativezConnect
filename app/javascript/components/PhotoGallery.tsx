import React from 'react'
import '../../assets/stylesheets/application.css' 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CustomNavbar from './Navbar';
import Container from 'react-bootstrap/esm/Container';
import FavoriteButton from './FavoriteButton';

const PhotoGallery = ({ user, photos }) => {
  console.log(photos)
  return(
    <>
      <CustomNavbar user={user} />
      <h2
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgb(1, 1, 1)', color: 'white', padding: '10px',
        marginTop: '65px'}}
      > 
          Creativez Gallery
      </h2>
      <Container>
      <Row>
            {
              photos.map((photo, idx) => (
                <Col xs key={idx}>
                  <Card bg="secondary" border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={photo.url} />
                    <Card.Body>
                      <Card.Title>{photo.title}</Card.Title>
                      <Card.Text>
                        {photo.description}
                      </Card.Text>
                      <FavoriteButton type={'photo'} id={photo.id} currentUserId={user.userId} favorites={photo.favorited_by}/>
        
                      <Button variant="info" size='sm' style={{marginLeft: '55%'}}> comment </Button>
                    </Card.Body>
                  </Card>
                </Col>
              )) 
            }
      </Row>
      </Container>
    </>
        )
}

export default PhotoGallery