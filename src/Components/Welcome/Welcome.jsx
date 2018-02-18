import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
/** style */
import './Welcome.css';

const styles = {
  arrowRightIconStyle: {
    color: '#1b578c',
    width: 36,
    height: 36,
  },
  arrowLeftIconStyle: {
    color: '#f2f2f2',
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

            <div className="component-title">
              <div className="welcome-welcome">WELCOME</div>
              <div className="welcome-im-daniel">I'M DANIEL</div>
              <div className="welcome-feel-free">FEEL FREE TO LOOK AROUND</div>
            </div>

            <div className="component-text-first">
              I'm a full stack web developer who loves programming, and who has a little sense of design. <br/><br/>
              On the site, for the navigation, you can use your mouse, the left and right key on your keyboard, and the menu
              to navigate between the pages. <br/><br/>
              Have fun!
            </div>

            <div className="rotated-element"></div>

            <div className="left-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowLeftIconStyle}
                      disabled={true}
                      style={styles.small}
                      className="arrow-icon">
                      <ArrowLeft />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="component-number">01</div>

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
