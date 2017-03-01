import React, { Component } from 'react'
import { DS } from './DataStore.js'

function Task (props) {
  return (
    <div>{props.task.desc}</div>
  )
}

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
        { this.state.taskList.map((task, index) => <Task key={index} task={task} />) }
      </div>
    )
  }
}

export default Tasks
