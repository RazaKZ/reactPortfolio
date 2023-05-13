import React from 'react';
import Typed from 'typed.js';
import { Link } from 'react-router-dom';
// import Typed from 'typed.js';
// import './assets/vendor/purecounter/purecounter_vanilla.js'
// import './assets/vendor/aos/aos.js'
// import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// import './assets/vendor/glightbox/js/glightbox.min.js'
// import './assets/vendor/isotope-layout/isotope.pkgd.min.js'
// import './assets/vendor/swiper/swiper-bundle.min.js'
// import './assets/vendor/typed.js/typed.min.js'
// import './assets/vendor/waypoints/noframework.waypoints.js'
// import './assets/vendor/php-email-form/validate.js'
// import './assets/js/main.js' 


import 'bootstrap/dist/css/bootstrap.css';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/vendor/bootstrap-icons/bootstrap-icons.css';
import './assets/vendor/boxicons/css/boxicons.min.css';
import './assets/vendor/glightbox/css/glightbox.min.css';
import './assets/vendor/swiper/swiper-bundle.min.css';
import './assets/css/style.css';
import myimage from './assets/img/profile-img.jpg';
import myimage1 from './assets/img/apple-touch-icon.png';

const Sidebar = () => {
  return (
    <>
      <header id="header">
        <div className="d-flex flex-column">
          <div className="profile">
            <img src={myimage} alt="" className="img-fluid rounded-circle" />
            <h1 className="text-light"><a href="index.html">Raza Kazmi</a></h1>
            <div className="social-links mt-3 text-center">
              <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
              <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
              <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
              <a href="#" className="google-plus"><i className="bx bxl-skype"></i></a>
              <a href="#" className="linkedin"><i className="bx bxl-linkedin"></i></a>
            </div>
          </div>

          <nav id="navbar" className="nav-menu navbar">
            <ul>
              <li><Link to="/" className="nav-link scrollto active"><i className="bx bx-home"></i> <span>Home</span></Link></li>
              <li><Link to="/about" className="nav-link scrollto"><i className="bx bx-user"></i> <span>About</span></Link></li>
              <li><Link to="/resume" className="nav-link scrollto"><i className="bx bx-file-blank"></i> <span>Resume</span></Link></li>
              <li><Link to="/portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i> <span>Portfolio</span></Link></li>
              <li><Link to="/service" className="nav-link scrollto"><i className="bx bx-server"></i> <span>Services</span></Link></li>
              
              <li><Link to="/contact" className="nav-link scrollto"><i className="bx bx-envelope"></i> <span>Contact</span></Link></li>
            </ul>
          </nav>
          {/* <!-- .nav-menu --> */}
        </div>
      </header>
      {/* <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
    <div className="hero-container" data-aos="fade-in">
      <h1>Alex Smith</h1>
      <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span></p>
    </div>
  </section> */}
    </>


  );

}

export default Sidebar;
