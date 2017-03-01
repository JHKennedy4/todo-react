import React, { Component } from 'react'
import { DS } from './DataStore.js'

class CreateTask extends Component {
  addTask (task, due) {
    DS.mutate('todo-list', (list) => {
      list.push({
        desc: task,
        complete: false,
        archived: false,
        createdAt: new Date(),
        dueDate: due,
        id: Math.random()
      })
      return list
    })
  }
  render () {
    return (
      <div onClick={() => { this.addTask('new task') }}>CreateTask</div>
    )
  }
}

export default CreateTask
