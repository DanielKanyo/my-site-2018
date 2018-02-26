import React, { Component } from 'react';
import IconButton from 'material-ui/IconButton';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import './Contact.css';

const styles = {
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
};

class Contact extends Component {

  copyToClipboard = (classname) => {
    let copyText = document.getElementsByClassName(classname)[0];
    copyText.select();
    document.execCommand("Copy");
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

            <div className="component-text-first contact-text-first">
              <input type="text" value="danielkanyo992@gmail.com" className="email" readOnly />
              <button onClick={() => { this.copyToClipboard('email') }} className="clip-board">CP</button> <br /><br />
              Szeged 6723 / Taban street 38 - 4th floor 11th door <br /><br />
              <input type="text" value="+36 30 7792953" className="cellnumber" readOnly />
              <button onClick={() => { this.copyToClipboard('cellnumber') }} className="clip-board">CP</button>
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

            <div className="rotated-element"></div>

            <div className="component-number">04</div>

          </div>
        </div>
      </div>
    );
  }
}

export default Contact;