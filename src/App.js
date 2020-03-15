import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
import './App.scss';
// import Header from './components/header/header';
import Card from './components/cc-card/cc-card';
// import NavButton from './components/nav-button/nav-button';
import LeftNav from './components/left-nav/left-nav';
import projects from './data/projects';
import './components/cc-card/cc-card.scss';
import TopNav from './components/top-nav/top-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      title: projects[0].title,
      stack: projects[0].stack,
      description: projects[0].description,
      image: projects[0].image,
      bgColor: projects[0].bgColor,
      borderColor: projects[0].borderColor

    };
  }

  nextProject = () => {
    let newIndex = this.state.index
    newIndex++
    if (newIndex === projects.length) {
      newIndex = 0;
    }

    this.setState(
      {
        index: newIndex,
        title: projects[newIndex].title,
        stack: projects[newIndex].stack,
        description: projects[newIndex].description,
        image: projects[newIndex].image,
        bgColor: projects[newIndex].bgColor,
        borderColor: projects[newIndex].borderColor
      }
    )

  }

  previousProject = () => {
    let newIndex = this.state.index
    newIndex--
    if (newIndex === -1) {
      newIndex = projects.length - 1;
    }
    this.setState(
      {
        index: newIndex,
        title: projects[newIndex].title,
        description: projects[newIndex].description,
        image: projects[newIndex].image,
        bgColor: projects[newIndex].bgColor,
        borderColor: projects[newIndex].borderColor
      }
    )

  }



  render() {
    return (
      <div className={`App ${this.state.bgColor} ${this.state.borderColor}`}
      
      style={{backgroundImage:`url(${this.state.image})`}}
      
      >
        <div className='overlay'></div>
        {/* <img className='project-image' src={this.state.image} /> */}
        <TopNav/>
        <LeftNav/>
        <Card/>
        {/* 
        <Header />
        <TopNav/>
        <LeftNav/>
     
        <div className='card' >
        <NavButton onClick={this.previousProject} />
          <h2>{this.state.title}</h2>
          <p>{this.state.stack}</p>
          <p>{this.state.description}</p>

          <NavButton onClick={this.nextProject} />
        </div> */}

        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

}



export default App;

