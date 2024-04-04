import React, { Component } from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
// import {
//   createBrowserRouter,
//   Link,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
// ]);
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
            <Nav.Link href='/Profile'>Home</Nav.Link>
            <Nav.Link href='/Groups'>Groups</Nav.Link>
            <Nav>
            <Nav.Link href='/Profile'>Profile</Nav.Link>
            <Nav.Link href='/Profile'>Log in</Nav.Link>
            <Nav.Link href='/Profile'>Sign Up</Nav.Link>
            </Nav>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      // </router>
    )
  }
}
