import React from 'react';
//import logo from '../images/component-images/proj-triviagame.jpg';
import './cc-card.scss';
import projects from '../../data/projects';


//this component will have state
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:this.header,
      description: this.description
    };
  }
  

  render() {
    return (
      <div className='card'>
        <h2>{projects[0].title}</h2>
        <p>{projects[0].description}</p>
      </div>
    );
  }


}

//we will render it


export default Card;