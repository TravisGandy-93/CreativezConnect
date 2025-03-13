import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import NavDropdown from 'react-bootstrap/NavDropdown';



const CustomNavbar = ({ user }) => {
  const [show, setShow] = useState(false);
  const profileName = user.username.charAt(0).toUpperCase() + user.username.slice(1);
  return (
    <Navbar collapseOnSelect={true} expand="xl" style={{backgroundColor: 'rgb(73, 74, 74, 1)'}} className="dark fixed-top">
      <Container >
        <NavbarBrand href="/home">{profileName}zConnect</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{width: '40%', display: 'contents'}}>
        <NavbarCollapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="/cypher">Cypher</Nav.Link>
            <NavDropdown title="Creativez" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3" >
                My Connects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/artists" >
                Musicians
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" >
                Cinematographers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        </Navbar.Toggle>
            <Button
            variant="outline-success"
            href="/signout"
            size="lg"
            style={{ textAlign: 'right', color: 'black' }}
            >
              Logout
            </Button>
      </Container>
    </Navbar>
  )
};

export default CustomNavbar;