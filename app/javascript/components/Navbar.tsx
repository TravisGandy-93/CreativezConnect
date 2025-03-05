import React from "react";
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
  const profileName = user.username.charAt(0).toUpperCase() + user.username.slice(1);
  return (
    <Navbar collapseOnSelect={true} expand="xl" className="bg-body-tertiary dark fixed-top">
      <Container style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#f8f9fa' }}>
        <NavbarBrand href="/home">{profileName}zConnect</NavbarBrand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <NavbarCollapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', width: '150px' }}
            navbarScroll
          >
            <Nav.Link href="/cypher">Cypher</Nav.Link>
            <NavDropdown title="Creativez" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
                My Connects
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4">
                Musicians
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Cinematographers
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </NavbarCollapse>
        </Navbar.Toggle>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
      </Container>
    </Navbar>
  )
};

export default CustomNavbar;