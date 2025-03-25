import React, { useCallback, useState } from "react";
import '../../assets/stylesheets/application.css' 
import CustomNavbar from "./Navbar";
import { Button, Card, CloseButton, Col, Container, Modal, Offcanvas, Row } from "react-bootstrap";
import FavoriteButton from "./FavoriteButton";
import {useDropzone} from 'react-dropzone';
import ArtistForm from "./ArtistForm";


const Artist = ({ artist, albums, user }) => {
  console.log(artist)
  const [show, setShow] = useState(false);
  const [addContent, setAddContent] = useState(false);
  const [myFiles, setMyFiles] = useState<File[]>([])

  const onDrop = useCallback(acceptedFiles => {
    setMyFiles([...myFiles, ...acceptedFiles])
  }, [myFiles])


  const {getRootProps, getInputProps} = useDropzone({
    onDrop
  });

  const removeFile = file => () => {
    const newFiles = [...myFiles]
    newFiles.splice(newFiles.indexOf(file), 1)
    setMyFiles(newFiles)
  }

  const removeAll = () => {
    setMyFiles([])
  }
  
  const files = myFiles.map(file => (
    <li key={file.name}>
      {file.name} - {file.size} bytes{" "}

      <CloseButton onClick={removeFile(file)}/>
    </li>
  ));

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const showAddContent = () => setAddContent(true);
  const closeAddContent = () => {
    setAddContent(false)
    removeAll
  };

  return(
    <>
      <CustomNavbar user={user} />
      <h2
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgba(1, 1, 1)', color: 'white', padding: '10px',
        marginTop: '65px'}}
      > 
          {artist.name}
      </h2>
      <div style={{textAlign: 'center', marginTop: '20px'}}>
        <img src={artist.image_url} alt={artist.name} style={{width: '50%', height: '50%'}}/>
      </div>
      <div style={{textAlign: 'center', marginTop: '20px', color: 'white'}}>
        <h3>Genre: {artist.genre}</h3>
      </div>
      <div style={{textAlign: 'center', marginTop: '20px', color: 'white'}}>
        <h3>Bio: {artist.bio}</h3>
      </div>

      {
        artist.user_id === user.userId &&
        <div style={{textAlign: 'center', marginTop: '20px'}}>
        <h3 style={{color: 'white'}}>Manage Your Content:</h3>
        <Button variant="primary" onClick={handleShow} style={{marginRight: '10px'}}>
          Edit Artist Info
        </Button>
        <Button onClick={showAddContent}>Add Content</Button>
        </div>
      }

      <Container>
            <Row>
            {
              albums.map((album, idx) => (
                <Col xs key={idx}>
                  <Card bg="secondary" border="dark" style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={album.cover} />
                    
                      <FavoriteButton type={'album'} id={album.id} currentUserId={user.userId} favorites={album.favorited_by}/>
                    
                  </Card>
                </Col>
              )) 
            }
            </Row>
      </Container>

      <Offcanvas show={show} onHide={handleClose} 
      style={{backgroundColor: 'rgb(1, 1, 1)', color: 'white',
        width: '45%'
      }}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add an Artist</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ArtistForm user={user} artist={artist}/>
        </Offcanvas.Body>
      </Offcanvas>
      
      <Modal show={addContent} onHide={closeAddContent}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <section className="container">
          <div {...getRootProps({className: 'dropzone'})} style={{border: 'solid', height: '150px', textAlign: 'center'}}>
            <input {...getInputProps()} />
            <p style={{margin: '3rem'}}>Drag 'n' drop some files here, or click to select files</p>
          </div>
          <aside>
            <h4 style={{textAlign: 'center'}}>
              {artist.art_form === 'photographer' ? 'Visual Files' : 'Audio Files' }
            </h4>
            <ul>{files}</ul>
            {files.length > 0 && <Button size="sm" onClick={removeAll}>Remove All</Button>}
          </aside>
        </section>
        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeAddContent}>
            Close
          </Button>
          <Button variant="primary" onClick={closeAddContent}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )

}

export default Artist;