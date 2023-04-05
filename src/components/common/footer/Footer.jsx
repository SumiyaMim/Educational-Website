import React from 'react';
import "./Footer.css";

const Footer = () => {
  return (
    <>
       <section className='newletter'>
         <div className='container flex'>
          <div className='left row'>
            <h1>Newsletter - Stay tune and get the latest update</h1>
            <span>Send your email address and get the latest update</span>
         </div>
          <div className='right row'>
            <input type='text' placeholder='Enter email address'/>
            <i className='fa fa-paper-plane'></i>
          </div>
         </div>
       </section>
       <footer>
         <div className='container padding'>
          <div className='box logo'>
            <h1>LEARNERS</h1>
            <span>ONLINE EDUCATION ENTERPRISE</span>
            <p>Online education is electronically supported learning that relies on the Internet 
                for teacher/student interaction and the distribution of class materials.</p>
            <h4>FOLLOW US</h4>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Pricing</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Resources</h3>
            <ul>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
              <li>Help Center</li>
            </ul>
          </div>
          <div className='box last'>
            <h3>Have a Questions?</h3>
            <ul>
              <li>
                <i class="fa-solid fa-location-dot"></i>
                Dhaka, Bangladesh
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +8801672435723
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i>
                info@learners.com
              </li>
            </ul>
          </div>
         </div>
       </footer>
       <div className='copyright'>
        <p>© {new Date().getFullYear()} Learners | All Rights Reserved</p>
      </div>
    </>
  )
}

export default Footer
