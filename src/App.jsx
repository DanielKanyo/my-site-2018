import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
/** style */
import './App.css';
/** components */
import Welcome from './Components/Welcome/Welcome';
import Navigation from './Components/Navigation/Navigation';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleChange = (value, event) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="App">
        <Navigation
          handleChangeProp={this.handleChange.bind(this)}
          handleChangeIndexProp={this.handleChangeIndex.bind(this)}
          handleToggleProp={this.handleToggle.bind(this)}
          handleCloseProp={this.handleClose.bind(this)}
          openProp={this.state.open}
        />

        <SupportTouch>
          <BindKeyboardSwipeableViews enableMouseEvents resistance index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <Welcome />
            <div className="slide slide2">About Me</div>
            <div className="slide slide3">Skills</div>
            <div className="slide slide4">Projects</div>
            <div className="slide slide5">Contact</div>
          </BindKeyboardSwipeableViews>
        </SupportTouch>
      </div>
    );
  }
}

export default App;
