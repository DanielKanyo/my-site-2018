import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
// import Tabs, { Tab } from 'material-ui/Tabs';
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import './App.css';
/** components */
import Welcome from './Components/Welcome/Welcome';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const styles = {
    margin: 0,
    left: 15,
    top: 10,
    right: 'auto',
    position: 'fixed',
    zIndex: 2,
    width: 68,
    height: 68,
    padding: 16,
};

const iconStyle = {
  icon: {
    width: 34,
    height: 34,
    color: '#fff'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }

  handleChange = (event, value) => {
    this.setState({
      index: event,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  render() {
    return (
      <div className="App">
        <IconButton iconStyle={iconStyle.icon} style={styles}>
          <NavigationMenu />
        </IconButton>
        {/* <Tabs value={this.state.index} className="tabs" onChange={this.handleChange}>
          <Tab className="tab" value={0} label="Welcome" />
          <Tab className="tab" value={1} label="About Me" />
          <Tab className="tab" value={2} label="Skills" />
          <Tab className="tab" value={3} label="Projects" />
          <Tab className="tab" value={4} label="Contact" />
        </Tabs> */}
        <SupportTouch>
          <BindKeyboardSwipeableViews enableMouseEvents resistance index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <div className="slide slide1"><Welcome /></div>
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
