import React from 'react';
import {Navbar, Nav, Container } from 'react-bootstrap';
import {TiSocialInstagram, TiSocialTwitter, TiSocialGooglePlusCircular, TiSocialFacebookCircular} from "react-icons/ti"

export default function Footer() {
  return (
    <div >
    <Navbar className='footer-div' expand="sm" collapseOnSelect  >
             
            <Container> 
           <Nav>
           <div className="text-left p-3" >
            © 2020 Copyright:
            </div>
            <div className="text-left p-3" >
              Term and Conditions
            </div>
           </Nav>

                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-nav-bar-nav">
                   

                    <Nav className="justify-content-end" style={{ width: "100%" }} >

                                <Nav.Item>
                                <Nav.Link to="/facebook"> <TiSocialFacebookCircular /></Nav.Link>
                                </Nav.Item>
                                    
                                <Nav.Item>
                                <Nav.Link to="/twitter"><TiSocialTwitter /></Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                <Nav.Link to="/google"><TiSocialGooglePlusCircular /></Nav.Link> 
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link to="/instagram"><TiSocialInstagram/> </Nav.Link> 
                                </Nav.Item>
                    </Nav>
                    </Navbar.Collapse>

            </Container>
  
            </Navbar>

    
    </div>
  )
}

 /* 
 <div className="text-center color-bg " style={{color:"black"}}>

    <div className="container pt-4">
    

    <section className="mb-4">
    <div>
      
      <a
        class="btn btn-link  btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><TiSocialFacebookCircular /></a>
        

    
      <a
        className="btn btn-link  btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><TiSocialTwitter /></a>

    
      <a
        className="btn btn-link btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><TiSocialGooglePlusCircular /></a>

     
      <a
        className="btn btn-link  btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i></a>

   
      <a
        className="btn btn-link btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><TiSocialInstagram/></a>
      </div>
    </section>
   
  </div>
 

  {/* -- Copyright and Term and Conditions-->
  <div>
      <div className="text-left p-3" >
        © 2020 Copyright:
      </div>
      <div className="text-left p-3" >
        Term and Conditions
      </div>
  </div>
  
    </div>
 */