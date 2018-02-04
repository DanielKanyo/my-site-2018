import React, { Component } from 'react';
import './Skills.css';
import { Grid, Row, Col } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPercentageIndex: 0,
    };
  }

  render() {
    return (
      <div className="Skills">
        <div className="component-title skills-title">Skills</div>
        <Grid>
          <Row className="show-grid">
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">JavaScript</div>
              <div className="circle-element javascript-skill">
                <ChangingProgressbar
                  percentages={[0, 80]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">React</div>
              <div className="circle-element react-skill">
                <ChangingProgressbar
                  percentages={[0, 65]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Jquery</div>
              <div className="circle-element jquery-skill">
                <ChangingProgressbar
                  percentages={[0, 85]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Java</div>
              <div className="circle-element java-skill">
                <ChangingProgressbar
                  percentages={[0, 50]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Git</div>
              <div className="circle-element git-skill">
                <ChangingProgressbar
                  percentages={[0, 50]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Bootstrap</div>
              <div className="circle-element bootstrap-skill">
                <ChangingProgressbar
                  percentages={[0, 90]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">NodeJS</div>
              <div className="circle-element node-skill">
                <ChangingProgressbar
                  percentages={[0, 50]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">PhotoShop</div>
              <div className="circle-element ps-skill">
                <ChangingProgressbar
                  percentages={[0, 90]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">MongoDB</div>
              <div className="circle-element mongo-skill">
                <ChangingProgressbar
                  percentages={[0, 40]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Docker</div>
              <div className="circle-element docker-skill">
                <ChangingProgressbar
                  percentages={[0, 40]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Jenkins</div>
              <div className="circle-element jenkins-skill">
                <ChangingProgressbar
                  percentages={[0, 40]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" md={3} sm={4} xs={6}>
              <div className="circle-element-title">Shell Script</div>
              <div className="circle-element script-skill">
                <ChangingProgressbar
                  percentages={[0, 40]}
                  strokeWidth={2}
                />
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

class ChangingProgressbar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPercentageIndex: 0,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        currentPercentageIndex: (this.state.currentPercentageIndex + 1) % this.props.percentages.length
      });
    }, this.props.interval);
  }

  getStyles() {
    return this.props.stylesForPercentage ? (
      this.props.stylesForPercentage(this.getCurrentPercentage())
    ) : {};
  }

  getCurrentPercentage() {
    return this.props.percentages[this.state.currentPercentageIndex];
  }

  render() {
    return (
      <CircularProgressbar
        {...this.props}
        percentage={this.getCurrentPercentage()}
        styles={this.getStyles()}
      />
    );
  }
}
ChangingProgressbar.defaultProps = {
  interval: 2000,
}

export default Skills;
