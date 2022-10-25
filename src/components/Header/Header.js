import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

import img from '../../images/h-icon.jpg'
const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand > <Image roundedCircle style={{ width: '40px'}} src={img}></Image> Education Web</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none text-black me-2' to='/home'> Home </Link>
            <Link className='text-decoration-none text-black me-2' to='/blog'> Blog </Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;