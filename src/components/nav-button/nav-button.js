import React from 'react';
import './nav-button.scss';

function NavButton(props) {
  return (
     <button onClick = {props.onClick}>CLICK</button>
  );
}

export default NavButton;
