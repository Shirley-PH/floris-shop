
import "../App.css"; 
import {Navbar, Nav} from 'react-bootstrap'; 
import { useState } from "react";


 const Navegation = () => {
     const [active, setActive] = useState("default"); 
    

    return(
        <div>

            <Navbar bg="light" variant="light" expand="sm" collapseOnSelect sticky="top">

           <Nav className="brand-color">
                      <a href="/"> <h3 className="logo-company">FLORISTNAME</h3> </a>
            </Nav>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-nav-bar-nav" >
                   

 
                <Nav className="justify-content-end positionLink width-navbar"
                    activeKey={active}
                    onSelect={(selectedKey) => setActive(selectedKey)}
                   defaultActiveKey="/"
                     style={{ width: "100%" }}>

                                <Nav.Item >
                                <Nav.Link   href="/" > HOME</Nav.Link>
                                </Nav.Item>
                                    
                                <Nav.Item >
                                <Nav.Link eventKey="link2" href="/about">ABOUT</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link eventKey="link3" href="/contact" >CONTACT</Nav.Link> 
                                </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

             
            </Navbar>
 


    
        </div>
    )

}
export default Navegation; 