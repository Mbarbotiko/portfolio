import React from 'react';
import './top-nav.scss';


function TopNav(props) {
  return (
   <div className = 'top-nav'>
           <ul>
             <li className = {props.active} style = {{borderColor:props.hover}}>Projects</li>
             <li>|</li>
             <li style = {{borderColor:props.hover}}>Contact</li>
             <li>|</li>
             <li style = {{borderColor:props.hover}}>Work History</li>
  
           </ul>
   </div>
  );
}

export default TopNav;
