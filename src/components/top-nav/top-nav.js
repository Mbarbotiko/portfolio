import React from 'react';
import './top-nav.scss';

function TopNav(props) {
  return (
   <div className = 'top-nav'>
           <ul>
             <li>Projects</li>
             <li>|</li>
             <li>Contact</li>
             <li>|</li>
             <li>Work History</li>
  
           </ul>
   </div>
  );
}

export default TopNav;
