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
            <Col className="progress" sm={4} xs={6}>
              <div className="circleElement">
                JavaScript
                <ChangingProgressbar
                  percentages={[0, 80]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" sm={4} xs={6}>
              <div className="circleElement">
                React
                <ChangingProgressbar
                  percentages={[0, 60]}
                  strokeWidth={2}
                />
              </div>
            </Col>
            <Col className="progress" sm={4} xs={6}>
              <div className="circleElement">
                Jquery
                <ChangingProgressbar
                  percentages={[0, 80]}
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
  interval: 3000,
}

export default Skills;
