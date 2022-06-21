import React from 'react';
import { Button, Container, Image, Nav, Navbar } from 'react-bootstrap';

import { Link } from 'react-router-dom';


const NavBars = () => {
 
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
                <Image width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1646005470/logo_jsnmjs.jpg" alt="" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link ><Link  to="/" style={{color: "green"}}>Home</Link></Nav.Link>
            <Nav.Link ><Link to="/add" style={{color: "green"}} >Add</Link></Nav.Link>
           </Nav>
        </Container>
        <Nav>
             <Button variant="outline-success" >
                 <Image  width="25%" src="https://res.cloudinary.com/danimel/image/upload/v1635784501/login_1_p33a7m.png" alt="" />
             </Button>
        </Nav>
        
      </Navbar>

    </div>
  );
};

export default NavBars;