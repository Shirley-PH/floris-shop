import React from "react";
import "../App.css"; 
import {Navbar, Nav, Container } from 'react-bootstrap'; 
//import {Link} from 'react-router-dom'; 

export default function Navegation(){

    return(
        <div>
            <Navbar  expand="sm" collapseOnSelect  sticky="top">
             
            <Container> 
           <Navbar.Brand>
                        FLORISTNAME
            </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-nav-bar-nav">
                   

                    <Nav className="justify-content-end" style={{ width: "100%" }} activeKey="/home" >

                                <Nav.Item>
                                <Nav.Link to="/home"> Home</Nav.Link>
                                </Nav.Item>
                                    
                                <Nav.Item>
                                <Nav.Link to="/about">About</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link to="/contact">Contact</Nav.Link> 
                                </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

            </Container>
  
            </Navbar>

        </div>
    )

}