import React, { Component } from 'react'
import { DS } from './DataStore.js'
import Task from './Task.js'

class Tasks extends Component {
  componentWillMount () {
    DS.observe('todo-list', (todos) => {
      this.setState({
        taskList: todos
      })
    })
  }
  render () {
    return (
      <div>
        { this.state.taskList.map((task) => <Task key={task.id} task={task} />) }
      </div>
    )
  }
}

export default Tasks
