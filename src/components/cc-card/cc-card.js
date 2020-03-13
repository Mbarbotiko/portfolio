import React from 'react';
import './cc-card.scss';
import projects from '../../data/projects';


//this component will have state
let position = 0;
class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header:projects[position].title,
      description: projects[position].description
    };
  }
  
  nextProject(){
    position++
    if(position===projects.length){
      position=0;
    }
    this.setState({
      header:projects[position].title,
      description: projects[position].description
    });
    
  }

 
  render() {
    return (
      <div className='card'>
        <h2>{this.state.header}</h2>
        <p>{this.state.description}</p>
        {/* <button onClick={()=>this.nextProject()}
        >CLICK</button> */}
      </div>
    );
  }


}

//we will render it


export default Card;