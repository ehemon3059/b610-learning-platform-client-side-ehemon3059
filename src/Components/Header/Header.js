import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';


const Header = () => {

    const {user,logOut} = useContext(AuthContext)
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                       
                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} activeStyle={{}} to='/'>Home</Nav.Link>
                        <Nav.Link as={Link} activeStyle={{}} to='/courses'>courses</Nav.Link>
                        <Nav.Link as={Link} activeStyle={{}} to='/blogs'>Blogs</Nav.Link>
                        <Nav.Link as={Link} activeStyle={{}} to='/faq'>FAQ</Nav.Link>

                        {
                        user?.uid ?

                        <Nav.Link as={Link} activeStyle={{}} onClick={logOut}>SignOut</Nav.Link>
                    
                        :
                        <>
                        <Nav.Link as={Link} activeStyle={{}} to='/login'>Login</Nav.Link>

                        <Nav.Link as={Link} activeStyle={{}} to='/signup'>Signup</Nav.Link>
                        </>
                    
                        }
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;