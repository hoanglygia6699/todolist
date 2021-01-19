import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null,
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  capitaliseWord() {
    console.log('Capitalising...');

  }

  validateInput(taskName) {
    if (!taskName) {
      return "*No task entered!!!";
    } else if (this.props.taskList.find((todo) => todo.name === todo.name)) {
      return "*Task already exists!!!";
    } else {
      return null;
    }
  }

  handleCreate(event) {
    event.preventDefault();

    const newTask = this.taskInput[0].value;
    const validateInput = this.validateInput(newTask);

    if (validateInput) {
      this.setState({ error: validateInput });
      return;
    }

    this.setState({ error: null });

    if (newTask) {
      this.props.createTask(newTask);
      this.taskInput.reset();
    }
  }

  renderError() { 
    if (!this.state.error) {
      return null;
    }
    return <div style={{ color: "red" }}>{this.state.error}</div>;
  }

  render() {
    return (
      <form
        ref={(input) => {
          this.taskInput = input;
        }}
        onSubmit={this.handbleCreate.bind(this)}
      >
        <label>Name of task</label>
        <input
          type="text"
          name=""
          placeholder="Enter task name"
          onChange={this.changeName}
          value={this.state.name}
        />
        <button type="submit" onClick={this.state.handbleCreate}>
          Add Task
        </button>
        {this.renderError()}
      </form>
    );
  }
}

export default Input;
