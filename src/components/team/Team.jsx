import React from 'react';
import "./Team.css";
import Back_team from "../common/back/Back_team";
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <>
    <Back_team title='Team'/>
    <section className='team padding'>
      <div className='container grid'>
        <TeamCard/>
      </div>
    </section>
    </>
  )
}

export default Team
