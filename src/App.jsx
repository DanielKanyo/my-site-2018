import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
/** material ui */
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
/** style */
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
      open: false
    };
  }

  handleChange = (event, value) => {
    this.setState({
      index: event,
    });
  };

  handleChangeIndex = (index) => {
    console.log(index)
    this.setState({
      index,
    });
  };

  handleToggle = () => this.setState({ open: !this.state.open });
  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div className="App">

        <IconButton iconStyle={iconStyle.icon} style={styles} onClick={this.handleToggle}>
          <NavigationMenu />
        </IconButton>

        <Drawer
          docked={false}
          className="my-drawer"
          open={this.state.open}
          onRequestChange={(open) => this.setState({ open })}
        >
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(0) }}>Home</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(1) }}>About Me</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(2) }}>Skills</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(3) }}>Projects</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(4) }}>Contact</MenuItem>
        </Drawer>

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
