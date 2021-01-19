import React, { Component } from "react";
import body from './ListComponents/body';
import header from './ListComponents/header'

class List extends Component {
  render() {
    const props = this.props;
    return (
      <div>
        <div>
          <header />
          <body tasks={this.props.taskList} {...props} />
        </div>
      </div>
    );
  }
}

export default List;
