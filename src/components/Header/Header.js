import React from 'react';
import { useContext } from 'react';
import { Image } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';

import { ThemeContext  } from '../../App';
import img from '../../images/h-icon.jpg'

const Header = () => {
  const { theme, toggleTheme }= useContext(ThemeContext)
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
          <ReactSwitch onChange={toggleTheme} checked={theme === "dark"} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;