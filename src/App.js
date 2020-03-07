import React from 'react';
import logo from './components/images/component-images/comp-handprint.jpg';
//public\images\component-images
import './App.scss';
import Header from './components/header/header.js';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <h1>M | B</h1>
        <p>Let's build something great together.</p>
      </header> */}
      <Header/>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
