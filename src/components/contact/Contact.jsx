import React from 'react';
import Back_contact from "../common/back/Back_contact";
import "./Contact.css";

const Contact = () => {

    const map = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.82238766723!2d90.27919172766151!3d23.78088745886602!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1680190699398!5m2!1sen!2sbd" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade'

  return (
    <>
      <Back_contact title='Contact Us'/>
      <section className='contacts padding'>
        <div className='container shadow flex'>
          <div className='left row'>
            <iframe src={map}></iframe>
          </div>
          <div className='right row'>
            <h1>Contact us</h1>
            <p>We are open for any suggestion</p>
            <div className='items grid2'>
              <div className='box'>
                <h4>ADDRESS:</h4>
                <p>Dhaka, Bangladesh</p>
              </div>
              <div className='box'>
                <h4>EMAIL:</h4>
                <p> info@learners.com</p>
              </div>
              <div className='box'>
                <h4>PHONE:</h4>
                <p> +8801672435723</p>
              </div>
            </div>
            <form action=''>
              <div className='flex'>
                <input type='text' placeholder='Name' />
                <input type='email' placeholder='Email' />
              </div>
              <input type='text' placeholder='Subject' />
              <textarea cols='30' rows='10' placeholder='Write a message here...'></textarea>
              <button className='primary_btn'>SEND MESSAGE</button>
            </form>
            <h3>Follow Us</h3>
            <span>FACEBOOK TWITTER INSTAGRAM DRIBBBLE</span>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact
