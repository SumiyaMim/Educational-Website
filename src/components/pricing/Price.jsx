import React from 'react';
import Back_price from '../common/back/Back_price';
import PriceCard from "./PriceCard";
import "./Price.css";
import Faq from "./Faq";

const Price = () => {
  return (
    <>
      <Back_price title='Choose The Right Plan'/>
      <section className='price padding'>
        <div className='container grid'>
          <PriceCard/>
        </div>
      </section>
      <Faq/>
    </>
  )
}

export default Price
