
import "../App.css"; 
import {Navbar, Nav} from 'react-bootstrap'; 
import {Link} from 'react-router-dom'; 
import { useLocation } from "react-router-dom";
import { useState } from "react";

 const Navegation = () => {
     const [active, setActive] = useState("default"); 
    

    return(
        <div>

            <Navbar bg="light" variant="light" expand="sm" collapseOnSelect sticky="top">
             
         
           <Navbar.Brand>
                        FLORISTNAME
            </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-nav-bar-nav">
                   

                    <Nav className="justify-content-end positionLink" 
                    activeKey={active}
                    onSelect={(selectedKey) => setActive(selectedKey)}
                    variant="tabs"
                     style={{ width: "100%" }}>

                                <Nav.Item>
                                <Link  eventKey="default" to="/" > Home</Link>
                                </Nav.Item>
                                    
                                <Nav.Item >
                                <Link eventKey="link-2" to="/about">About</Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Link eventKey="link-3"to="/contact">Contact</Link> 
                                </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

             
            </Navbar>
 


    
        </div>
    )

}
export default Navegation; 