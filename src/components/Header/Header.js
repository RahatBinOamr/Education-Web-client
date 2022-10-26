import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';

import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import ReactSwitch from 'react-switch';

import { ThemeContext  } from '../../App';
import img from '../../images/h-icon.jpg'
import { AuthContext } from '../Context/AuthProvider';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme }= useContext(ThemeContext)

  const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.error(error))
}

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
           
          </Nav>
          <Link className='text-decoration-none text-black me-4' to='/home'> Home </Link>
            <Link className='text-decoration-none text-black me-4' to='/faq'> FAQ </Link>
            <Link className='text-decoration-none text-black me-4' to='/blog'> Blog </Link>
         
         
                        <>
                            {
                                user?.email ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <Button variant="light" onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                         <Link className='text-decoration-none text-black me-4' to='/register'> Register </Link>
          <Link className='text-decoration-none text-black me-4' to='/login'> Login </Link>
                                    </>
                            }


                        </>
                        <Link to="/profile">
                            {user?.photoURL ?
                                <Image
                                    style={{ height: '30px' }}
                                    roundedCircle
                                    src={user?.photoURL}>
                                </Image>
                                : <FaUser></FaUser>
                            }
                        </Link>
                    
          <ReactSwitch className='me-4' onChange={toggleTheme} checked={theme === "dark"} />
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;