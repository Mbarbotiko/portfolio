import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
import './App.scss';
// import Header from './components/header/header';
import Card from './components/cc-card/cc-card';
import LeftNav from './components/left-nav/left-nav';
import projects from './data/projects';
import appState from './data/appState';
import './components/cc-card/cc-card.scss';
import TopNav from './components/top-nav/top-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // index: 0,
      page: appState.contact,
      // title: projects[0].title,
      // stack: projects[0].stack,
      // description: projects[0].description,
      // image: projects[0].image,
      bgColor: appState.contact.bgColor
      // borderColor: projects[0].borderColor,
      // navBorder:projects[0].navBorder

    };
  }




  // nextProject = () => {
  //   let NI = this.state.index
  //   NI++
  //   if (NI === projects.length) {
  //     NI = 0;
  //   }


  //   this.setState(
  //     {
  //       index: NI,
  //       title: projects[NI].title,
  //       stack: projects[NI].stack,
  //       description: projects[NI].description,
  //       image: projects[NI].image,
  //       bgColor: projects[NI].bgColor,
  //       borderColor: projects[NI].borderColor,
  //       navBorder:projects[NI].navBorder
  //     }
  //   )

  // }

  // previousProject = () => {
  //   let NI = this.state.index
  //   NI--
  //   if (NI === -1) {
  //     NI = projects.length - 1;
  //   }
  //   this.setState(
  //     {
  //       index: NI,
  //       title: projects[NI].title,
  //       description: projects[NI].description,
  //       image: projects[NI].image,
  //       bgColor: projects[NI].bgColor,
  //       borderColor: projects[NI].borderColor,
  //       navBorder:projects[NI].navBorder
  //     }
  //   )

  // }

  activateNavigation = () => {
    //https://stackoverflow.com/questions/38436351/react-add-class-active-on-selected-tab

  }

  navClick = (page) => {
    console.log(page)
    switch (page) {
      case 'projects': console.log('run some function to set state and update the page to show projects content')
        break;
      case 'history': console.log('run some function here to update state and show work history')
        break;
      case 'contact': console.log('run some function here to update state and show contact information')
        break;
      default: console.log('navigation error')
    }
    console.log('click')
  }

  render() {
    return (
      <div className={`App ${this.state.bgColor}`}
      // style={{ backgroundImage: `url(${this.state.image})` }}
      >
        <div className={`overlay ${this.state.bgColor} ${this.state.borderColor}`}></div>
        <TopNav hover={this.state.navBorder} navClick={this.navClick} />
        {/* <LeftNav nextProjectEvent={this.nextProject.bind(this)} previousProjectEvent={this.previousProject.bind(this)} /> */}
        {/* <Card title={this.state.title} description={this.state.description} stack = {this.state.stack} /> */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </div>
    );
  }

}



export default App;

