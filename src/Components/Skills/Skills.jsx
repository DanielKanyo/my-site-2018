import React, { Component } from 'react';
import './Skills.css';
import { Grid, Row, Col } from 'react-bootstrap';
import CircularProgressbar from 'react-circular-progressbar';

class Skills extends Component {

  constructor(props) {
    super(props);

    this.state = {
      currentPercentageIndex: 70,
    };
  }

  render() {
    return (
      <Grid>
        <Row className="show-grid">
          <Col className="progress" xs={4}>
              <CircularProgressbar
                className="progressbar-red"
                percentage={this.state.currentPercentageIndex}
                initialAnimation={true}
                strokeWidth={3}
                background={false}
                backgroundPadding={20} />

          </Col>
          <Col className="progress" xs={4}>
            React
          </Col>
          <Col className="progress" xs={4}>
            Jquery
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Skills;
