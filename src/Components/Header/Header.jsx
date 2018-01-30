import React, { Component } from 'react';
import './Header.css';
/** Components */
import Navigation from '../Navigation/Navigation';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Navigation />
      </div>
    );
  }
}

export default Header;
