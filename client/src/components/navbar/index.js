import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

export default function Navigation() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Nav className="mr-auto">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#stylist">Stylist</Nav.Link>
                <Nav.Link href="#location">Contact</Nav.Link>
            </Nav>
        </Navbar>
    )
}