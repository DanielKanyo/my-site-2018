import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';
// import FlatButton from 'material-ui/FlatButton';

import './About.css';

const styles = {
  arrowRightIconStyle: {
    color: '#f2f2f2',
    width: 36,
    height: 36,
  },
  arrowLeftIconStyle: {
    color: '#1b578c',
    width: 36,
    height: 36,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  risedButton: {
    margin: 12,
  }
};

class About extends Component {

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  render() {
    return (
      <div className="slide slide2">
        <div className="Component About">

          <div className="component-content">

            <div className="component-title about-title">
              <div className="title1 about-something">SOMETHING</div>
              <div className="title2 about-aboutme">ABOUT ME</div>
            </div>

            <div className="component-text-first about-text-first">
              <span>
                With experience in web development and design,
                I maintain a healthy balance between functionality and visual impact in all my work. <br />
                I believe every piece of design can be a work of art.
                I love my work and enjoy each new project as I get it. <br />
                Don't hesitate to contact me if you think I can be of service to you.</span>
            </div>
            {/* <div className="cv-container">
              <FlatButton label="Curriculum Vitae" style={styles.risedButton} />
            </div> */}

            <div className="rotated-element"></div>

            <div className="left-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowLeftIconStyle}
                      onClick={() => { this.handleChangeIndex(0) }}
                      style={styles.small}
                      className="arrow-icon">
                      <ArrowLeft />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="component-number">02</div>

            <div className="right-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowRightIconStyle}
                      style={styles.small}
                      onClick={() => { this.handleChangeIndex(2) }}
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

export default About;