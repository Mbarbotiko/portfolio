import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
//public\images\component-images
import './App.scss';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;

