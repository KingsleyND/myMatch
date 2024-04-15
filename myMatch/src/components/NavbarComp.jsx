import React, { Component } from 'react'
import {Navbar, Nav, Container} from "react-bootstrap"
import { useGlobalContext } from '../state/context'

export default function NavbarComp () {

  const {setIsModalActive, setCaller} = useGlobalContext()

  function handleSignup(e){
    e.preventDefault()
    setCaller("signup")
    setIsModalActive(true)
  }

  function handleLogin(e){
    e.preventDefault()
    setCaller("login")
    setIsModalActive(true)
  }



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

            <Nav.Link className='logged-out modal-trigger' data-target="modal-login">
              <button onClick={handleLogin} className="text-btn">
                Log in

              </button>
            </Nav.Link>
            <Nav.Link className='logged-out modal-trigger' data-target="modal-signup">
              <button onClick={handleSignup} className="text-btn">
                Sign Up

              </button>
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      </div>
      // </router>
    )
}
