import React, { Component } from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"

export default class NavbarComp extends Component {
  render() {
    return (
      // <router>
      <div>
        <Navbar expand="lg" bg="dark" data-bs-theme="dark" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">MyMatch</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href='/Home'>Home</Nav.Link>
            <Nav.Link href='/Groups'>Groups</Nav.Link>
            <Nav.Link href='/Profile' className='logged-in modal-trigger' >Profile</Nav.Link>
            <Nav.Link href='/Profile' className='logged-in ' id='logout'>Log out</Nav.Link>

            <Nav.Link href='/Profile' className='logged-out modal-trigger' data-target="modal-login">Log in</Nav.Link>
            <Nav.Link href='/Profile'className='logged-out modal-trigger' data-target="modal-signup">Sign Up</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      // </router>
    )
  }
}
