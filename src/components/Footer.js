import React from 'react';
import { FaAngular, FaFacebook, FaLinkedin, FaReact, FaTwitter, FaVuejs } from 'react-icons/fa';
import img from '../images/h-icon.jpg' 



const Footer = () => {
    return (
      <footer className="page-footer bg-dark text-light font-small blue pt-4">
      <div className="container-fluid text-center text-md-left">
          <div className="row">
              <div className="col-md-6 mt-md-0 mt-3">
                  <h5 className="text-uppercase">Education Web</h5>
                 <img src={img} alt="" />
              </div>
  
              <hr className="clearfix w-100 d-md-none pb-0"/>
  
              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase"> Another Course</h5>
                  <ul className="list-unstyled">
                      <li> <FaReact/> React </li>
                      <li> <FaVuejs/> Vue </li>
                      <li> <FaAngular/> Angular </li>
                      
                  </ul>
              </div>
  
              <div className="col-md-3 mb-md-0 mb-3">
                  <h5 className="text-uppercase">contact</h5>
                  <ul className="list-unstyled">
                      <li> <FaFacebook/> Facebook </li>
                      <li> <FaTwitter/> Twitter </li>
                      <li> <FaLinkedin/> Linkedin </li>
                     
                  </ul>
              </div>
          </div>
      </div>
  
      <div className="footer-copyright text-center py-3">© 2020 Copyright: @Education Web
        
      </div>
  
  </footer>
    );
};

export default Footer;