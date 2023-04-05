import React from "react";
import { useLocation } from "react-router-dom";

const Back_about = ({ title }) => {
    
  const location = useLocation()

  return (
    <>
      <section className='back_about'>
        <h2>Home / {location.pathname.split("/")[1]}</h2>
        <h1>{title}</h1>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Back_about
