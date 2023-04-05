import React from 'react';
import "./Hero.css";
import Title from '../../common/title/Title';

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
          <Title subtitle='WELCOME TO LEARNERS' title='Best Online Education Expertise' />
          <p>Online education is electronically supported learning that relies on the Internet for teacher/student interaction and the distribution of class materials.</p>
            <div className='button'>
              <button className='primary_btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero
