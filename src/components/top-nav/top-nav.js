import React from 'react';
import './top-nav.scss';
import appState from '../../data/appState';

const {
  projects: { navMessage: projects },
  contact: { navMessage: contact },
  history: { navMessage: history },
  projects: { page: projectsPage },
  contact: { page: contactPage },
  history: { page: historyPage }

} = appState;


function TopNav(props) {
  return (
    <div className='top-nav'>
      <ul>
        <li onClick={() => props.navClick(projectsPage)} className={props.active} style={{ borderColor: props.hover }}>{projects}</li>
        <li>|</li>
        <li onClick={() => props.navClick(contactPage)} style={{ borderColor: props.hover }}>{contact}</li>
        <li>|</li>
        <li onClick={() => props.navClick(historyPage)} style={{ borderColor: props.hover }}>{history}</li>

      </ul>
    </div>
  );
}

export default TopNav;
