import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation( ){
    return(
        <Navbar>
                <Navbar.Brand>Him. Her. Them. </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#message">About</Nav.Link>
      <Nav.Link href="#stylist">Stylist</Nav.Link>
      <Nav.Link href="#location">Contact</Nav.Link>
    </Nav>

        </Navbar>
    )
}