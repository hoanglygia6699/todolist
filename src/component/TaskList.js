import React, { Component } from "react";

class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      name: "",
      action: "ADD_TASK",
      tasks: [
        {
          name: "Task 1"
        },
        {
          name: "Task 2" 
        },
      ]
    };
    this.changeName = this.changeName.bind(this);
  }

  changeName = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  addTask = () => {
    if (!this.state.tasks.find((item) => item.name === this.state.name)) {
      this.setState({
        tasks: [...this.state.tasks, { name: this.state.name }],
        name: "",
      });
    }
  };

  editTask = (item, index) => {
    this.setState({
      action: "UPDATE_TASK",
      name: item.name,
      index: index,
    });
  };

  updateTask = () => {
    let data = this.state.tasks;
    data.map((item, index) => {
      if (this.state.index === index) {//mutable/immutable
        item.name = this.state.name;
      }
    });

    this.setState({
      tasks: data,
      name: "",
      action: "ADD_TASK",
    });
  };

  deleteTask = (name) =>
    this.setState({
      tasks: this.state.tasks.filter(item => item.name !== name)
    });

  render() {
    return (
      <div className="container">
        <div>
          <div>
            <h1>{this.state.action}</h1>
            <div>
              <label>Name of task</label>
              <input
                type="text"
                name=""
                placeholder="Enter task name"
                onChange={this.changeName}
                value={this.state.name}
              />
            </div>
          </div>
          <div>
            <button
              type="button"
              onClick={
                this.state.action == "ADD_TASK" ? this.addTask : this.updateTask
              }
            >
              Add Task
            </button>
          </div>
        </div>
        <h1>Todo List</h1>
        <table className="table">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name of task</th>
              <th>Update</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.tasks.map(function (item, index) {
              return  <tr key={index}>
                <td>{index}</td>
                <td>{item.name}</td>
                <td>
                  <button onClick={() => this.editTask(item, index)}>Edit</button>
                </td>
                <td>
                  <button onClick={() => this.deleteTask(item.name)}>Remove</button>
                </td>
              </tr>
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TaskList;
