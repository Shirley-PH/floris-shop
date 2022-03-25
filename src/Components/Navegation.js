import React, { useState } from "react";
import "../App.css"; 
import {Navbar, Nav, Container } from 'react-bootstrap'; 
import {Link} from 'react-router-dom'; 

export default function Navegation(){

    const [color, setColor]= useState("white");

    return(
        <div>
            <Navbar  expand="sm" collapseOnSelect sticky="top">
             
            <Container> 
           <Navbar.Brand>
                        FLORISTNAME
            </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-nav-bar-nav">
                   

                    <Nav className="justify-content-end positionLink" style={{ width: "100%" }} activeKey="/home" >

                                <Nav.Item>
                                <Link to="/home" className="color" onClick={() => setColor((color === "white" ? "blue" : "white"))}> Home</Link>
                                </Nav.Item>
                                    
                                <Nav.Item>
                                <Link to="/about">About</Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Link to="/contact">Contact</Link> 
                                </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

            </Container>
  
            </Navbar>

        </div>
    )

}