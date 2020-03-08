import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
//public\images\component-images
import './App.scss';
import Header from './components/header/header';
import Card from './components/cc-card/cc-card';

function App() {
  return (
    <div className="App">
      <Header/>
      <Card/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

