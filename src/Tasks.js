import React, { Component } from 'react'
import Task from './Task.js'

class Tasks extends Component {
  render () {
    return (
      <div>
        { this.props.taskList.map((task) => <Task {...task} />) }
      </div>
    )
  }
}

export default Tasks
