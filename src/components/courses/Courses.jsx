import React from 'react';
import Back_course from '../common/back/Back_course';
import CourseCard from './CourseCard';
import OnlineCourse from './OnlineCourse';

const Courses = () => {
  return (
    <>
      <Back_course title='Explore Courses'/>
      <CourseCard/>
      <OnlineCourse/>
    </>
  )
}

export default Courses
