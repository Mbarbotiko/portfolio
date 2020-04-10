import React from 'react';
import './left-nav.scss';
import projects from '../../data/projects';
import NavArrow from './button';

const LeftNav = (props) => {
  return (
    <div className='left-nav'>
      <NavArrow id='up' onClick = {props.scrollUp} changeView = {props.previousProjectEvent}/>
      {projects.map((i, item) => {
        if (projects.i === 0) {
          return <div className={`dot-nav ${this.state.bgColor}`}></div>
        } else {
          return <div className='dot-nav'></div>
        }
      })}
      <NavArrow id='down' changeView = {props.nextProjectEvent}/>

    </div>
  )
}

export default LeftNav;