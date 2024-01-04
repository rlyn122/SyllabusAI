import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar style={{ backgroundColor: '#343a40' }} variant="dark" expand="lg">
            <Navbar.Brand href="/">SyllabusAI</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="/upload">Upload Syllabus</Nav.Link>
                    <Nav.Link href="/start">Get Started</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;
