import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
//public\images\component-images
import './App.scss';
import Header from './components/header/header';
//import Card from './components/cc-card/cc-card';
import NavButton from './components/nav-button/nav-button';
import projects from './data/projects';
import './components/cc-card/cc-card.scss';

let position = 0;


class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      bgColor: projects[position].bgColor,
      bgOverlay: projects[position].bgOverlay,
      borderColor: projects[position].borderColor,
      image: projects[position].image,
      header: projects[position].title,
      description: projects[position].description,
     
    };
  }

  nextProject() {
    position++
    if (position === projects.length) {
      position = 0;
    }
    this.setState({
      bgColor: projects[position].bgColor,
      bgOverlay: projects[position].bgOverlay,
      borderColor: projects[position].borderColor,
      image: projects[position].image,
      header: projects[position].title,
      description: projects[position].description
    });
    

  }

  render() {
    
    return (
      <div className={`App ${this.state.bgColor}
       ${this.state.borderColor} ${this.state.bgOverlay}
       `}>
        <Header />
        <img className ='project-image' src={this.state.image}/>
          <div className='card' >
            <h2>{this.state.header}</h2>
            <p>{this.state.description}</p>
            <NavButton onClick={() => this.nextProject()
        } />
          </div>
      
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }
  
}



export default App;

