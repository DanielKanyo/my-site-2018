import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

import './Pagination.css';

class Pagination extends Component {
  render() {
    return (
      <div className="Pagination">
        <FlatButton
          className="pagination-btn"
          secondary={true}
          icon={<FontIcon className={"fa fa-circle"} />}
        />
        <FlatButton
          className="pagination-btn"
          secondary={true}
          icon={<FontIcon className={"fa fa-circle-o"} />}
        />
        <FlatButton
          className="pagination-btn"
          secondary={true}
          icon={<FontIcon className={"fa fa-circle-o"} />}
        />
        <FlatButton
          className="pagination-btn"
          secondary={true}
          icon={<FontIcon className={"fa fa-circle-o"} />}
        />
        <FlatButton
          className="pagination-btn"
          secondary={true}
          icon={<FontIcon className={"fa fa-circle-o"} />}
        />
      </div>
    );
  }
}

export default Pagination;