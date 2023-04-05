import React from 'react';
import "./Courses.css";
import { online } from "../../dummydata";
import Title from '../common/title/Title';

const OnlineCourse = () => {
  return (
    <>
      <section className='online'>
         <div className='container'>
            <Title subtitle='COURSES' title='Our Online Courses'/>
            <div className='content grid3'>
              {online.map((val) => (
               <>
               <div className='box'>
                <div className='img'>
                  <img src={val.cover} />
                  <img src={val.hoverCover} alt='' className='show'/>
                </div>
                <h1>{val.courseName}</h1>
                <span>{val.course}</span>
              </div>
               </>
              ))}
            </div>
         </div>
      </section>
    </>
  )
}

export default OnlineCourse
