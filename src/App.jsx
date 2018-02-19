import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import SupportTouch from 'react-swipeable-views';
import { bindKeyboard } from 'react-swipeable-views-utils';
import RefreshIndicator from 'material-ui/RefreshIndicator';
/** style */
import './App.css';
/** components */
import Welcome from './Components/Welcome/Welcome';
import Navigation from './Components/Navigation/Navigation';
import Pagination from './Components/Pagination/Pagination';

const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);

const style = {
  refresh: {
    background: 'none',
    boxShadow: 'none',
    marginLeft: '50vw',
    marginTop: '50vh'
  }
};

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      open: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeIndex = this.handleChangeIndex.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  componentDidMount() {
    let loadingElement = document.getElementsByClassName("loading-element")[0];
    setTimeout(() => {
      loadingElement.remove();
    }, 2000);
  }

  handleChange = (value, event) => {
    this.setState({
      index: value,
    });
  };

  handleChangeIndex = (index) => {
    this.setState({
      index,
    });
  };

  handleToggle = () => {
    this.setState({ open: !this.state.open });
  }

  handleClose = () => {
    this.setState({ open: false });
  }

  render() {
    return (
      <div className="App">
        <div className="loading-element">
          <RefreshIndicator
            className="refresh-indicator"
            size={60}
            left={-24}
            top={-24}
            loadingColor="#f2f2f2"
            status="loading"
            style={style.refresh}
          />
        </div>

        <Navigation
          handleChangeProp={this.handleChange.bind(this)}
          handleChangeIndexProp={this.handleChangeIndex.bind(this)}
          handleToggleProp={this.handleToggle.bind(this)}
          handleCloseProp={this.handleClose.bind(this)}
          openProp={this.state.open}
        />

        <SupportTouch>
          <BindKeyboardSwipeableViews enableMouseEvents resistance index={this.state.index} onChangeIndex={this.handleChangeIndex}>
            <Welcome
              handleChangeIndexProp={this.handleChangeIndex.bind(this)}
              indexProp={this.state.index}
            />
            <div className="slide slide2">About Me</div>
            <div className="slide slide3">Skills</div>
            <div className="slide slide4">Opinions</div>
            <div className="slide slide5">Contact</div>
          </BindKeyboardSwipeableViews>
        </SupportTouch>

        <Pagination
          indexProp={this.state.index}
          handleChangeIndexProp={this.handleChangeIndex.bind(this)}
        />
      </div>
    );
  }
}

export default App;
