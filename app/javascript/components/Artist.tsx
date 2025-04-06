import React, { useCallback, useState } from "react";
import '../../assets/stylesheets/application.css' 
import CustomNavbar from "./Navbar";
import { Button, Card, CloseButton, Col, Container, Form, Modal, Offcanvas, Row } from "react-bootstrap";
import FavoriteButton from "./FavoriteButton";
import {useDropzone} from 'react-dropzone';
import ArtistForm from "./ArtistForm";
import axios from 'axios';


const Artist = ({ artist, albums, user }) => {
  const [show, setShow] = useState(false);
  const [addContent, setAddContent] = useState(false);
  const [tracks, setTracks] = useState<{ title: string; audioFile: File }[]>([]);


  const onDrop = useCallback(acceptedFiles => {
    const newTracks = acceptedFiles.map(file => ({
      title: file.name,
      audioFile: file,
    }));
    setTracks(prevTracks => [...prevTracks, ...newTracks]);
  }, [])

  const {getRootProps, getInputProps} = useDropzone({
    onDrop
  });

  const removeFile = file => () => {
    const newFiles = [...tracks]
    newFiles.splice(newFiles.indexOf(file), 1)
    setTracks(newFiles)
  }

  const removeAll = () => {
    setTracks([])
  }
  
  const files = tracks.map(file => (
    <li key={file.title}>
      {file.title}

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

  const [newAlbum, setNewAlbum] = useState({
    title: '',
    description: '',
    release_date: '',
    genre: '',
    cover: '',
    artist_id: artist.id,
    user_id: user.userId
  })

  const handleAlbumChange = (e) => {
    const { name, value } = e.target;
    setNewAlbum(prevState => ({ ...prevState, [name]: value }));
  };

  const handleFileUpload = async (e) => {
    e.preventDefault();
    const csrfTokenMeta = document.querySelector('meta[name="csrf-token"]');
    const csrfToken = csrfTokenMeta ? csrfTokenMeta.getAttribute('content') : '';
    try {
      // Step 1: Create a new album
      const albumResponse = await fetch('/albums', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-Token': csrfToken || '',
        },
        body: JSON.stringify({ album: newAlbum }), // Replace 'User' with the actual username if available
      })
      .then(response => response.json())
      console.log(albumResponse)
      const albumId = albumResponse.id;
      
      // Step 2: Upload each track under the created album
      tracks.map(async (track) => {
          const audioFile = track.audioFile;
          let duration = 'unknown'
          try {
            const arrayBuffer = await audioFile.arrayBuffer();
            const audioContext = new (window.AudioContext)();
            
            const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
            duration = `${formatDuration(audioBuffer.duration)}`;
            
            console.log('Audio duration in seconds:', duration);
            
            // Use the duration as needed here...
          } catch (error) {
            console.error('Error decoding audio file:', error);
          }
        
        const formData = new FormData();
        formData.append('track[audio_file]', track.audioFile);
        formData.append('track[title]', track.title);
        formData.append('track[length]', duration);
        formData.append('track[genre]', newAlbum.genre);
        formData.append('track[artist_id]', artist.id);

      await fetch(`/albums/${albumId}/tracks`, {
          method: 'POST',
          headers: {
            'X-CSRF-Token': csrfToken || '',
          },
          body: formData
          }
        );
      });

      console.log('Album and tracks created successfully!');
    } catch (error) {
      console.error('Error uploading file:', error.message || error.response.data);
    }
  };

  function formatDuration(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60); // Use Math.floor for whole seconds
  
    return `${minutes}:${remainingSeconds}`;
  }

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
                    <Card.Img variant="top" src={album.cover} onClick={()=>{window.location.href = `/albums/${album.id}`}}/>
                    
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
        <Form onSubmit={handleFileUpload}> 
        <Modal.Body> 
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Album Title
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name='title' value={newAlbum.title} onChange={handleAlbumChange} required/>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Album Cover Url
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name='cover' value={newAlbum.cover} onChange={handleAlbumChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Description
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name='description' value={newAlbum.description} onChange={handleAlbumChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Album Release Date
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name='release_date' value={newAlbum.release_date} onChange={handleAlbumChange} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Genre
            </Form.Label>
            <Col sm={10}>
              <Form.Control type="name" name='genre' value={newAlbum.genre} onChange={handleAlbumChange} />
            </Col>
          </Form.Group>
        <section className="container">
          <div {...getRootProps({className: 'dropzone'})} style={{border: 'solid', height: '150px', textAlign: 'center'}}>
            <input {...getInputProps()}  type="file" id="audioFileInput" accept="audio/*" required/>
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
          <Button type="submit" variant="primary">
            Save Changes
          </Button>
        </Modal.Footer>
        </Form>
      </Modal>
    </>
  )

}

export default Artist;