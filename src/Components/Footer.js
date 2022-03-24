import React from 'react'

export default function Footer() {
  return (
    <div>
    <div className="text-center" style={{color:"black"}}>

  <div className="container pt-4">
    {/* -- Social media icons -->*/}
    <section className="mb-4">
      {/* -- Facebook -->*/}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i></a>
        TiSocialFacebookCircular

     { /*-- Twitter--*/}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i></a>

      {/* -- Google -->*/}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i></a>

      {/* -- Instagram -->*/}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i></a>

      {/* -- LinkedIn -->*/}
      <a
        className="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i></a>
      
    </section>
   
  </div>
 

  {/* -- Copyright -->*/}
  <div className="text-center text-dark p-3" >
    © 2020 Copyright:
  </div>
  
</div>
    </div>
  )
}
