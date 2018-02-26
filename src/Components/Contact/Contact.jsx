import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import './Contact.css';

const styles = {
  arrowLeftIconStyle: {
    color: '#f2f2f2',
    width: 36,
    height: 36,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
};

class Contact extends Component {

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  render() {
    return (
      <div className="slide slide4">
        <div className="Component Contact">
          <div className="component-content">
            <div className="component-title contact-title">
              <div className="title1 contact-please">PLEASE</div>
              <div className="title2 contact-contactme">CONTACT ME</div>
            </div>

            <div className="rotated-element"></div>

            <div className="left-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowLeftIconStyle}
                      onClick={() => { this.handleChangeIndex(2) }}
                      style={styles.small}
                      className="arrow-icon">
                      <ArrowLeft />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="component-number">04</div> */}

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;