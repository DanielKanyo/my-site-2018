import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import './Pagination.css';

class Pagination extends Component {

  handleChangeIndex = (index) => {
    this.props.handleChangeIndexProp(index);
  };

  render() {
    let index = this.props.indexProp;
    return (
      <div className="Pagination">
        <FlatButton
          onClick={() => { this.handleChangeIndex(0) }}
          className="pagination-btn first"
          secondary={true}
          icon={<FontIcon className={index === 0 ? "fa fa-square" : "fa fa-square-o"} />}
        />
        <FlatButton
          onClick={() => { this.handleChangeIndex(1) }}
          className="pagination-btn second"
          secondary={true}
          icon={<FontIcon className={index === 1 ? "fa fa-square" : "fa fa-square-o"} />}
        />
        <FlatButton
          onClick={() => { this.handleChangeIndex(2) }}
          className="pagination-btn third"
          secondary={true}
          icon={<FontIcon className={index === 2 ? "fa fa-square" : "fa fa-square-o"} />}
        />
        <FlatButton
          onClick={() => { this.handleChangeIndex(3) }}
          className="pagination-btn fourth"
          secondary={true}
          icon={<FontIcon className={index === 3 ? "fa fa-square" : "fa fa-square-o"} />}
        />
        <FlatButton
          onClick={() => { this.handleChangeIndex(4) }}
          className="pagination-btn fifth"
          secondary={true}
          icon={<FontIcon className={index === 4 ? "fa fa-square" : "fa fa-square-o"} />}
        />
      </div>
    );
  }
}

export default Pagination;