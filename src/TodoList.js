import React, { Component } from 'react'
import CreateTask from './CreateTask.js'
import Tasks from './Tasks.js'
import DS from './DataStore.js'

class TodoList extends Component {
  constructor (props) {
    super(props)

    DS.observe('todo-list', (todos) => {
      this.setState({
        taskList: todos
      })
    })
  }

  render () {
    return (
      <div className='todo-list-container'>
        <CreateTask />
        <Tasks taskList={this.state.taskList} />
      </div>
    )
  }
}

export default TodoList
