import React, { Component } from 'react';
import './About.css';

class About extends Component {
  render() {
    return (
      <div className="About" name="about">
        <div className="about-content">
          <div className="component-title about-title">About Me</div>
          <div className="component-text about-text">
            With experience in web development and design, I maintain a healthy balance between functionality and visual 
            impact in all my work. I believe every piece of design can be a work of art. I love my work and enjoy each 
            new project as I get it. Don't hesitate to contact me if you think I can be of service to you.
          </div>
          <div className="element-center">
            <button className="main-button cv-btn">
              Curriculum Vitae
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
