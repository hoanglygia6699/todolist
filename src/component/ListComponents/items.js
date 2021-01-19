import React, { Component } from "react";

class items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editing: false,
    };
  }

  renderTasks() {
    const { name, isComplete } = this.props;

    const taskStyle = {
      cursor: "pointer",
      fontWeight: "bold",
      color: isComplete ? "green" : "red",
    };

    if (this.state.editing) {
      return (
        <div key={name}>
          <form onSubmit={this.handleSave.bind(this)}>
            <input
              name={name}
              type="text"
              defaultValue={name}
              ref="editInput"
            />
          </form>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.handleToggleEdit.bind(this)}>Edit</button>
      </div>
    );
  }

  renderButtons() {
    if (this.state.editing) {
      return (
        <div>
          <button onClick={this.handleToggleEdit.bind(this)}>Cancel</button>
          <button onClick={this.handleDelete.bind(this)}>Delete</button>
          <button onClick={this.handleSave.bind(this)}>Save</button>
        </div>
      );
    }

    return (
      <div>
        <button onClick={this.handleToggleEdit.bind(this)}>Edit</button>
      </div>
    );
  }

  handleToggleComplete() {
    const taskToToggle = this.props;
    this.props.toggleTask(taskToToggle);
  }

  handleDelete() {
    const taskToDelete = this.props.name;
    this.props.deleteTask(taskToDelete);
    this.handleToggleEdit();
  }

  handleSave(event) {
    event.preventDefault();

    const oldTask = this.props.name;
    const newTask = this.refs.editInput.value;    
    this.props.saveTask(oldTask, newTask);

    this.setState({editing: false});
  }

  handleToggleEdit() {
    this.setState(prevState => ({ editing: !prevState.editing}));
  }
  render() {
    return (
      <div>
        {this.renderTasks()}
        {this.renderButtons()}
      </div>
    );
  }
}

export default items;
