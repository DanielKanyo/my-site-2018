import React, { Component } from 'react';
import './App.css';
/** Components */
import Navigation from './Components/Navigation/Navigation';
import Header from './Components/Header/Header';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Opinions from './Components/Opinions/Opinions';
import Hobbies from './Components/Hobbies/Hobbies';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Navigation />
          <Header />
          <About />
          <Skills />
          <Opinions />
          <Hobbies />
        </div>
    );
  }
}

export default App;
