import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Restaurant</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/user">Book Table</Nav.Link>
            <Nav.Link href=""></Nav.Link>
            <Nav.Link href=""></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
