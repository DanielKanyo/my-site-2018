import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
/** style */
import './App.css';
/** components */
import Welcome from './Components/Welcome/Welcome';
import Navigation from './Components/Navigation/Navigation';
import Pagination from './Components/Pagination/Pagination';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

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
            <Welcome
              handleChangeIndexProp={this.handleChangeIndex.bind(this)}
              indexProp={this.state.index}
            />
            <About
              handleChangeIndexProp={this.handleChangeIndex.bind(this)}
              indexProp={this.state.index}
            />
            <Skills
              handleChangeIndexProp={this.handleChangeIndex.bind(this)}
              indexProp={this.state.index}
            />
            <Contact
              handleChangeIndexProp={this.handleChangeIndex.bind(this)}
              indexProp={this.state.index}
            />
          </BindKeyboardSwipeableViews>
        </SupportTouch>

        <Pagination
          indexProp={this.state.index}
          handleChangeIndexProp={this.handleChangeIndex.bind(this)}
        />
      </div>
    );
  }
}

export default App;
