import React from 'react';
import arrow from '../images/component-images/arrow.png';

const NavArrow = (props) => {
    return (
        <div><img id={props.id} src={arrow} onClick={props.changeView}/></div>
    )
  }
  
  export default NavArrow;