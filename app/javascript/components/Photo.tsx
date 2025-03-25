import React from "react";
import CustomNavbar from "./Navbar";
import { Card } from "react-bootstrap";
import '../../assets/stylesheets/application.css' // Import your CSS file here

const Photo = ({user, photo}) => {

  return(
    <>
      <CustomNavbar user={user} />
      <Card style={{marginTop: '65px', alignItems: 'center', backgroundColor: 'rgb(128, 126, 126)'}}>
        <Card.Img variant="top" src={photo.url} style={{maxWidth: '75vw', maxHeight: '75vh'}}/>
        <Card.Body>
          <Card.Text>
            {photo.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default Photo