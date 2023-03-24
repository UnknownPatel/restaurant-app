import React, { useEffect } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap';
import BarChartIcon from '@mui/icons-material/BarChart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';
import '../Menu1.css';

function NavbarRes() {
  const [{ cart }, dispatch] = useStateValue();

  useEffect(() => {
    const toggleIcon = document.querySelector(".toggleIcon");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  useEffect(() => {
    const toggleIcon = document.querySelector(".cart");
    toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    });
  }, []);

  return (
    <div>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Gordhan Thal</Navbar.Brand>
          <Nav className="me-auto navbar-custom">
            <Nav.Link href="">Order Online</Nav.Link>
            <Nav.Link href="">Reviews</Nav.Link>
            <Nav.Link href=""></Nav.Link>
            <div className="shoppingCart">
              <ShoppingCartIcon className="cart" />
              <div className={`${!cart ? "noCartItem" : "cart_content"}`}>
                <p>{cart ? cart.length : ""}</p>
              </div>
            </div>
            <div className='toggleMenu'>
              <BarChartIcon className='toggleIcon'/>
            </div>
          </Nav>
        </Container>
      </Navbar>

      {/*  */}
      {/* <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
  <a class="navbar-brand" href="#">Restaurant 1</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Home <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">Features</a>
      <a class="nav-item nav-link" href="#">Pricing</a>
      <a class="nav-item nav-link" href="#">Disabled</a>
    </div>
  </div>
</nav> */}

{/*  */}

{/* <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="pills-home-tab" data-toggle="pill" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-profile-tab" data-toggle="pill" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="pills-contact-tab" data-toggle="pill" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</a>
  </li>
</ul>
<div class="tab-content" id="pills-tabContent">
  <div class="tab-pane fade" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">...hello</div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">...</div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">...</div>
</div> */}

{/*  */}

{/* <nav class="nav nav-pills flex-column flex-sm-row">
  <a class="flex-sm-fill text-sm-center nav-link nav-font" href="#">Active</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Link</a>
  <a class="flex-sm-fill text-sm-center nav-link" href="#">Disabled</a>
</nav> */}
    </div>
  )
}

export default NavbarRes


{/* <style>
         Modify the background color 
         
        .navbar-custom {
            background-color: lightgreen;
        }
         Modify brand and text color 
         
        .navbar-custom .navbar-brand,
        .navbar-custom .navbar-text {
            color: green;
        }
</style>

<nav class="navbar navbar-custom">
        <a class="navbar-brand" href="#">
          Custom color background navbar
      </a>
    </nav> */}

// import React from 'react'

// const NavbarRes = () => {
//   return (
//     <div className='navbar'>
//       <div className='container'>
//         <div className='nav__container'>
//           <div className='nav__left'>
//             left
//           </div>
//           <div className='nav__right'>
//             right
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default NavbarRes
