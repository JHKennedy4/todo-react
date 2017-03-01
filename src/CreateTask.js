import React, { Component } from 'react'
import { DS } from './DataStore.js'
import TaskModel from './TaskModel.js'

class CreateTask extends Component {
  constructor (props) {
    super(props)
    this.state = {
      task: ""
    }
    this.editTask = this.editTask.bind(this)
    this.addTask = this.addTask.bind(this)
  }

  addTask (task) {
    if (task.length === 0) {
      return
    }
    DS.mutate('todo-list', (list) => {
      list.push(new TaskModel(task))
      return list
    })

    // clear input
    this.setState({
      task: ""
    })
  }

  editTask (e) {
    this.setState({
      task: e.target.value
    })
  }

  render () {
    return (
      <div className="create-new-task">
        <form onSubmit={(e) => { this.addTask(this.state.task); e.preventDefault(); }}>
          <label htmlFor="task-input">Add a new task</label>
          <input type="text" id="task-input" className="task-input" value={ this.state.task } onChange={ this.editTask } />
          <input type="submit" value="+" />
        </form>
      </div>
    )
  }
}

export default CreateTask
