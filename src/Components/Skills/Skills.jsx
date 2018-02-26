import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import IconButton from 'material-ui/IconButton';
import ArrowRight from 'material-ui/svg-icons/hardware/keyboard-arrow-right';
import ArrowLeft from 'material-ui/svg-icons/hardware/keyboard-arrow-left';

import './Skills.css';

const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
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
  },
};

class Skills extends Component {

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  render() {
    return (
      <div className="slide slide3">
        <div className="Component Skills">
          <div className="component-content">
            <div className="component-title skills-title">
              <div className="title1 skills-someofmy">SOME OF MY</div>
              <div className="title2 skills-skills">SKILLS</div>
            </div>

            <div className="component-text-first skills-text-first">
              <div className="chip-container" style={styles.wrapper}>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>H</Avatar>HTML5
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>C</Avatar>CSS3
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>J</Avatar>JavaScript
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>R</Avatar>React
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>J</Avatar>Java
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>N</Avatar>NodeJS
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>B</Avatar>Bootstrap
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>G</Avatar>Git
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>M</Avatar>MongoDB
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>R</Avatar>React Native
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>S</Avatar>Shell Script
                </Chip>
                <Chip style={styles.chip} className="chip-element">
                  <Avatar size={32}>J</Avatar>Jenkins
                </Chip>
              </div>
            </div>

            <div className="rotated-element"></div>

            <div className="left-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowLeftIconStyle}
                      onClick={() => { this.handleChangeIndex(1) }}
                      style={styles.small}
                      className="arrow-icon">
                      <ArrowLeft />
                    </IconButton>
                  </div>
                </div>
              </div>
            </div>

            <div className="component-number">03</div>

            <div className="right-arrow-container">
              <div className="outer">
                <div className="middle">
                  <div className="inner">
                    <IconButton
                      iconStyle={styles.arrowRightIconStyle}
                      style={styles.small}
                      onClick={() => { this.handleChangeIndex(3) }}
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

export default Skills;