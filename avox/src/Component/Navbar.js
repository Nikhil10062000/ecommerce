import React from "react";
import {
  Navbar,
  Container,
  Button,
  Nav,
  
} from "react-bootstrap";
const Navbarr = () => {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#" className='fw-bold fs-4'>AVOX</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto mx-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link >Home</Nav.Link>
              <Nav.Link >Products</Nav.Link>
              <Nav.Link >About</Nav.Link>
              <Nav.Link >Contact</Nav.Link>


            
              <Container fluid className="ms-5" >
              <Button variant="outline-warning" className="ms-2">Login</Button>
              <Button variant="outline-warning"className="ms-2">Register</Button>
              <Button variant="outline-warning" className="ms-2">Cart</Button>
              </Container>
              
            </Nav>
            
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbarr;
