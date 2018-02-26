import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
/** style */
import './Welcome.css';

const styles = {
  arrowRightIconStyle: {
    color: '#1b578c',
    width: 36,
    height: 36,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  }
};

class Welcome extends Component {

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  render() {
    return (
      <div className="slide slide1">
        <div className="Component Welcome">
          <div className="component-content">
            <div className="component-title welcome-title">
              <div className="title1 welcome-welcome">WELCOME</div>
              <div className="title2 welcome-im-daniel">I'M DANIEL</div>
            </div>
            <div className="component-text-first welcome-text-first">
              <span>I'm a full stack web developer who loves programming, and who has a little sense of design.</span><br /><br />
              <span className="content-desktop-view">
                On the site, for the navigation, you can use your mouse, the left and right key on your keyboard, and the menu
                to navigate between the pages. <br /><br />
                Have fun!
              </span>
              <span className="content-mobile-view">
                On the site, for the navigation, you can swipe between the pages, or you can use the menu bar on the left. <br /><br />
                Have fun!
              </span>
            </div>

            <div className="rotated-element"></div>
            
            <div className="component-number welcome-number">01</div>

            <div className="right-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowRightIconStyle}
                      style={styles.small}
                      onClick={() => { this.handleChangeIndex(1) }}
                      className="arrow-icon">
                      <ArrowRight />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;
