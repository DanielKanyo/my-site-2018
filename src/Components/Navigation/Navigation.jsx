import React, { Component } from 'react';
/** material ui */
import IconButton from 'material-ui/IconButton';
import NavigationMenu from 'material-ui/svg-icons/navigation/menu';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
/** style */
import './Navigation.css';

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

class Navigation extends Component {

  handleChange = (value, event) => {
    this.props.handleChangeProp(value);
  };

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  handleToggle = () => {
    this.props.handleToggleProp();
  }

  handleClose = () => {
    this.props.handleCloseProp();
  }

  handleReqChanged = () => {
    this.props.handleCloseProp();
  }

  render() {
    return (
      <div className="Navigation">
        <IconButton iconStyle={iconStyle.icon} style={styles} onClick={this.handleToggle}>
          <NavigationMenu />
        </IconButton>

        <Drawer
          docked={false}
          className="my-drawer"
          open={this.props.openProp}
          onRequestChange={this.handleReqChanged}
        >
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(0) }}>Home</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(1) }}>About Me</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(2) }}>Skills</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(3) }}>Projects</MenuItem>
          <MenuItem onClick={() => { this.handleClose(); this.handleChangeIndex(4) }}>Contact</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default Navigation;
