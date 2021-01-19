import logo from './logo.svg';
import './App.css';
import TaskList from './component/TaskList';

import React, { Component } from 'react'
// import Input from './component/Input';
// import List from './component/List';

// const tasks = [
//   { name: "task1", isComplete: false },
//   { name: "task2", isComplete: true },
//   { name: "task3", isComplete: false }
// ];

class App extends Component {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //      tasks,
  //   }
  // }

  // createTask(task, errorMsg) {
  //   this.setState((prevState) => {
  //     prevState.tasks.push({ name: task, isComplete: false });
  //     return {
  //       tasks: prevState.tasks
  //     };
  //   });
  // }
  
  // deleteTask(taskToDelete) {
  //   this.setState((prevState) => {
  //     const tasks = prevState.tasks.filter(
  //       (task) => task.name !== taskToDelete
  //     );
  //     return { tasks };
  //   });
  // }

  // saveTask(oldTask, newTask) {
  //   console.log("saving task: " + oldTask + " => " + newTask);

  //   const foundTask = tasks.find((task) => task.name === oldTask);

  //   foundTask.name = newTask;
  //   this.setState({ tasks: this.state.tasks });
  // }

  // toggleTask(taskToToggle) {
  //   this.setState(({ tasks }) => ({
  //     tasks: tasks.map((task) =>
  //       task.name === taskToToggle.name
  //         ? { ...task, isComplete: !task.isComplete }
  //         : task
  //     )
  //   }));
  // }

  render() {
    return (
      <div>
        <TaskList />
        {/* <Input
          createTask={this.createTask.bind(this)}
          taskList={this.state.tasks}
        /> */}
      </div>
    )
  }
} 

export default App

