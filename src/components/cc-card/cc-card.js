import React from 'react';
//import logo from '../images/component-images/proj-triviagame.jpg';
import './cc-card.scss';
import projects from '../../data/projects';


//this component will have state
let position = 0;
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:projects[position].title,
      description: projects[position].description,
      bgColor: projects[position].bgColor,
      borderColor: projects[position].borderColor,
      image: projects[position].image
    };
  }
  
  nextProject(){
    position++
    if(position===projects.length){
      position=0;
    }
    this.setState({
      header:projects[position].title,
      description: projects[position].description,
      bgColor: projects[position].bgColor,
      borderColor: projects[position].borderColor,
      image: projects[position].image
    });
    
  }

 
 


  render() {
    return (
      <div className={`card ${this.state.bgColor}`}>
        <h2>{this.state.header}</h2>
        <p>{this.state.description}</p>
        <button onClick={()=>this.nextProject()}
        >CLICK</button>
      </div>
    );
  }


}

//we will render it


export default Card;