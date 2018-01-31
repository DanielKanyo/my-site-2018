import React, { Component } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
/** Style */
import './Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <ParallaxProvider>
          <div className="header-text">
          
            <Parallax
              className="custom-class"
              offsetYMax={300}
              offsetYMin={-200}
              slowerScrollRate
              tag="figure"
            >
              <div className="header-title">
                DANIEL KANYO
            </div>
            </Parallax>

            <div className="header-description">
              WEBDEVELOPER
            </div>
          </div>
        </ParallaxProvider>
      </div>
    );
  }
}

export default Header;
