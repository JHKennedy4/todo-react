import React, { Component } from 'react'
import CreateTask from './CreateTask.js'
import Tasks from './Tasks.js'

class TodoList extends Component {
  render () {
    return (
      <div className='todo-list-container'>
        <CreateTask />
        <Tasks />
      </div>
    )
  }
}

export default TodoList
