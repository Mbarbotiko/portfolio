import React from 'react';
//import logo from './components/images/component-images/comp-handprint.jpg';
import './App.scss';
// import Header from './components/header/header';
//import Card from './components/cc-card/cc-card';
//import LeftNav from './components/left-nav/left-nav';
//import projects from './data/projects';
import appState from './data/appState';
import './components/cc-card/cc-card.scss';
import TopNav from './components/top-nav/top-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: appState.contact,
      bgColor: appState.contact.bgColor
    };
  }

  projectsPage = () => {
    this.setState({
      page: appState.projects.page,
      bgColor: appState.projects.bgColor
    })

  }

  switchPageview = (pageName) => {
    this.setState({
      page: appState[pageName].page,//use object key (string from appState to switch page view and access the properties per which page user is accessing)
      bgColor: appState[pageName].bgColor
    })

  }
  navClick = (page) => {
    this.switchPageview(page);
  
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

