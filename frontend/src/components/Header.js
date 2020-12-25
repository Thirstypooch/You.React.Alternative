import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import {  } from "gsap";

const Header = () => {

  return (
    <header>
      <Navbar
        variant='light'
        expand='lg'
        collapseOnSelect
        style={{ background: '#DCC5D1' }}
      >
        <Container>
          <Navbar.Brand href='/'>YOU Organic Skincare</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link href='/cart'>
                <i className='fas fa-shopping-cart '></i>
                Carrito
              </Nav.Link>
              <Nav.Link href='/login'>
                <i className='fas fa-user '></i>
                Ingrese
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}



export default Header
