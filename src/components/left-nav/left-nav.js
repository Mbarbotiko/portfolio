import React from 'react';
import './left-nav.scss';
import arrow from '../images/component-images/arrow.png'

function LeftNav(props) {
  return (
   <div className = 'left-nav'>
           <div><img id = 'up' src={arrow}/></div>
           <div className='dot-nav'></div>
           <div className='dot-nav'></div>
           <div className='dot-nav'></div>
           <div className='dot-nav'></div>
           <div><img id='down' src={arrow}/></div>
   </div>
  );
}


export default LeftNav;
