import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import './App.css';

const styles = {
  slide: {
    padding: 15,
    minHeight: '100vh',
    bottom: 0,
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <SupportTouch>
          <SwipeableViews enableMouseEvents resistance>
            <div style={Object.assign({}, styles.slide, styles.slide1)}>slide n°1</div>
            <div style={Object.assign({}, styles.slide, styles.slide2)}>slide n°2</div>
            <div style={Object.assign({}, styles.slide, styles.slide3)}>slide n°3</div>
          </SwipeableViews>
        </SupportTouch>
      </div>
    );
  }
}

export default App;
