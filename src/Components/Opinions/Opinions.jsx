import React, { Component } from 'react';
import Progress from 'react-progressbar';
import ReactInterval from 'react-interval';
import './Opinions.css';

class Opinions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      progressValue: 0,
      count: 0,
      opinions: [
        '"He is a hard-working, disciplined professional who never misses a deadline. Working with him is a privilege." /Andor Nagl/',
        'Correct, accurate and dependable! He accomplished what I found out. I can only recommend! /Attila Ladocki/"'
      ],
      arrayIndex: 0
    };
  }

  render() {

    let arrayIndex = this.state.arrayIndex;
    let arrayLength = this.state.opinions.length - 1;

    return (
      <div className="Opinions">
        <div className="opinions-content">
          <div className="component-title opinions-title">
            Opinions
          </div>
          <div className="component-text opinions-text">
            {this.state.opinions[this.state.arrayIndex]}
          </div>
        </div>
        <div>
          <Progress completed={this.state.count} />
          <ReactInterval timeout={300} enabled={true}
            callback={() => {
              if (this.state.count === 100) {
                if (arrayIndex < arrayLength) {
                  this.setState({
                    arrayIndex: ++arrayIndex
                  });
                } else {
                  this.setState({
                    arrayIndex: 0
                  });
                }
                this.setState({ count: 0 })
              } else {
                this.setState({ count: this.state.count + 4 })
              }
            }
            } />
        </div>
      </div>
    );
  }
}

export default Opinions;
