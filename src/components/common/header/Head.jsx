import React from 'react';
import "./Header.css";

const head = () => {
  return (
    <>
      <section className='head'>
        <div className='container flex'>
          <div className='logo'>
            <h1>LEARNERS</h1>
            <span>ONLINE EDUCATION EXPERTISE</span>
          </div>
          <div className='social'>
            <i className='fab fa-facebook-f icon'></i>
            <i className='fab fa-instagram icon'></i>
            <i className='fab fa-twitter icon'></i>
            <i className='fab fa-youtube icon'></i>
          </div>
        </div>
      </section>
    </>
  )
}

export default head
