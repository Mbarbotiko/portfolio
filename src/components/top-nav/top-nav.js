import React from 'react';
import './top-nav.scss';
import appState from '../../data/appState';

const {
  projects:{navMessage:projects},
  contact:{navMessage:contact},
  history:{navMessage:history}
} = appState;


function TopNav(props) {
  return (
    <div className='top-nav'>
      <ul>
        <li className={props.active} style={{ borderColor: props.hover }}>{projects}</li>
        <li>|</li>
        <li style={{ borderColor: props.hover }}>{contact}</li>
        <li>|</li>
        <li style={{ borderColor: props.hover }}>{history}</li>

      </ul>
    </div>
  );
}

export default TopNav;
