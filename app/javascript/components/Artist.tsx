import React, { useState } from "react";
import '../../assets/stylesheets/application.css' 
import CustomNavbar from "./Navbar";
import { Button, Modal } from "react-bootstrap";

const Artist = ({ artist, user }) => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
console.log(artist)
  return(
    <>
      <CustomNavbar user={user} />
      <h2
        style={{textAlign: 'center', position: 'sticky', top: 0,
        zIndex: 10, margin: 0, borderBottom: '1px solid #ddd',
        backgroundColor: 'rgba(1, 1, 1)', color: 'white', padding: '10px'}}
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
        <Button >Add Content</Button>
        </div>
      }

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  )

}

export default Artist;