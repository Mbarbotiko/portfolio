import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
import './App.scss';
// import Header from './components/header/header';
import Card from './components/cc-card/cc-card';
import LeftNav from './components/left-nav/left-nav';
import projects from './data/projects';
import './components/cc-card/cc-card.scss';
import TopNav from './components/top-nav/top-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      page:'',
      title: projects[0].title,
      stack: projects[0].stack,
      description: projects[0].description,
      image: projects[0].image,
      bgColor: projects[0].bgColor,
      borderColor: projects[0].borderColor,
      navBorder:projects[0].navBorder

    };
  }

  nextProject = () => {
    let NI = this.state.index
    NI++
    if (NI === projects.length) {
      NI = 0;
    }


    this.setState(
      {
        index: NI,
        title: projects[NI].title,
        stack: projects[NI].stack,
        description: projects[NI].description,
        image: projects[NI].image,
        bgColor: projects[NI].bgColor,
        borderColor: projects[NI].borderColor,
        navBorder:projects[NI].navBorder
      }
    )

  }

  previousProject = () => {
    let NI = this.state.index
    NI--
    if (NI === -1) {
      NI = projects.length - 1;
    }
    this.setState(
      {
        index: NI,
        title: projects[NI].title,
        description: projects[NI].description,
        image: projects[NI].image,
        bgColor: projects[NI].bgColor,
        borderColor: projects[NI].borderColor
      }
    )

  }

  render() {
    return (
      <div className={'App'} style={{ backgroundImage: `url(${this.state.image})` }}>
        <div className={`overlay ${this.state.bgColor} ${this.state.borderColor}`}></div>
        <TopNav hover = {this.state.navBorder} />
        <LeftNav nextProjectEvent={this.nextProject.bind(this)} previousProjectEvent={this.previousProject.bind(this)} />
        <Card title={this.state.title} description={this.state.description} stack = {this.state.stack} />
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    );
  }

}



export default App;

