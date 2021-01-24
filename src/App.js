import React from 'react';
//import logo from './components/images/component-images/comp-handprint.jpg';
import './App.scss';
// import Header from './components/header/header';
import Card from './components/cc-card/cc-card';
//import LeftNav from './components/left-nav/left-nav';
//import projects from './data/projects';
import appState from './data/appState';
import './components/cc-card/cc-card.scss';
import TopNav from './components/top-nav/top-nav';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: appState.contact.page,
      bgColor: appState.contact.bgColor
    };
  }

  switchPageview = (pageName) => {
    //need to check state so not clickable if on the sae page:
    if (this.state.page !== appState[pageName].page) {
      console.log('click ran')
      this.setState({
        page: appState[pageName].page,//use object key (string from appState to switch page view and access the properties per which page user is accessing)
        bgColor: appState[pageName].bgColor
      })
    }


  }
  navClick = (page) => {
    this.switchPageview(page);

  }


  render() {
    const projectsView = <Card title='Projects Card' />//pull down other components put into a variable then return
    //based on app state create conditional rendering here
    const contactView = <Card title='Contact Card' />
    const historyView = <Card title='History Card' />
    let view;
    if (this.state.page === 'projects') {
      view = projectsView;
    }
    if (this.state.page === 'contact') {
      view = contactView;
    }
    if (this.state.page === 'history') {
      view = historyView;
    }

    return (
      <div className={`App ${this.state.bgColor}`}
      // style={{ backgroundImage: `url(${this.state.image})` }}
      >
        <div className={`overlay ${this.state.bgColor} ${this.state.borderColor}`}></div>
        <TopNav hover={this.state.navBorder} navClick={this.navClick} />
        {view}
      </div>
    );
  }

}



export default App;

