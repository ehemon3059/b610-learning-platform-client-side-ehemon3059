import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../UserContext/UserContext';
import { FaUser } from 'react-icons/fa';


const Header = () => {

    const {user,logOut} = useContext(AuthContext);

   // console.log(user);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Pro Programmer</Navbar.Brand>
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
                            <>
                            <Nav.Link  activeStyle={{}} >{user?.displayName}</Nav.Link>
                            
                            <Nav.Link as={Link} activeStyle={{}} onClick={logOut}>SignOut</Nav.Link>
                            </>
                        
                    
                        :
                        <>
                        <Nav.Link as={Link} activeStyle={{}} to='/login'>Login</Nav.Link>

                        <Nav.Link as={Link} activeStyle={{}} to='/signup'>Signup</Nav.Link>
                        </>
                    
                        }

                        <Nav.Link eventKey={2} href="#memes">
                        {
                            user?.photoURL ?
                            <Image roundedCircle style={{height:'30px'}} src={user?.photoURL}  data-bs-toggle="tooltip" data-bs-placement="top" title={user?.displayName}></Image>
                            :
                            <FaUser></FaUser>
                        }
                        </Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;