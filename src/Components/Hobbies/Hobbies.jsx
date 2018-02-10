import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';
/** Style */
import './Hobbies.css';

class Hobbies extends Component {
  render() {
    return (
      <div className="Hobbies" name="hobbies">
        <Carousel className="my-carousel">
          <Carousel.Item>
            <div className="hobbies-content">
              <div className="component-title hobbies-title">Developing</div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            second
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}

export default Hobbies;
