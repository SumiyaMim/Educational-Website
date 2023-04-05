import React from 'react';
import "./About.css";
import Title from '../common/title/Title';
import { homeAbout } from '../../dummydata';
import AWrapper from './AWrapper';

const AboutCard = () => {
  return (
    <>
       <section className='aboutHome'>
        <div className='container flex'>
          <div className='left row'>
            <img src='./images/about.jpg' alt=''/>
          </div>
          <div className='right row'>
            <Title subtitle='LEARN ANYTHING' title='Benefits About Online Learning Expertise'/>
            <div className='items'>
               {homeAbout.map((val) => {
                return (
                    <div className='item flex'>
                      <div className='img'>
                          <img src={val.cover} alt='' />
                      </div>
                      <div className='text'>
                           <h2>{val.title}</h2>
                           <p>{val.desc}</p>
                      </div>
                   </div>
                )
                })}
            </div>
          </div>
        </div>
       </section>
       <AWrapper />
    </>
  )
}

export default AboutCard
