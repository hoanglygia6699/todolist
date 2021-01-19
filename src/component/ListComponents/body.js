import React, { Component } from "react";
import items from './items';

class body extends Component {
  displayTasks() {
    const props = this.props;

    return this.props.tasks.map((task, index) => (
      <ListItem key={index} {...task} {...props} />
    ));
  }

  render() {
    return (
      <div>
        {this.displayTasks()}
      </div>
    );
  }
}

export default body;
