import React, { Component } from 'react'
import { DateTag } from './ComponentUtil.js'
import { DS } from './DataStore.js'
import update from 'immutability-helper'

class Task extends Component {
  constructor (props) {
    super(props)
    this.state = props
    this.deleteTask = this.deleteTask.bind(this)
    this.editTask = this.editTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
    this.saveChanges = this.saveChanges.bind(this)
    this.cancelAndRevertChanges = this.cancelAndRevertChanges.bind(this)
  }

  componentWillMount () {
    this.setState({
      editing: false
    })
  }

  editTask () {
    // converts to editor view
    this.setState({
      editing: true,
      originalTask: this.state.task
    })
  }

  updateTask (e) {
    this.setState({
      task: update(this.state.task, { $merge: { desc: e.target.value } })
    })
  }

  saveChanges (e) {
    DS.mutate('todo-list', (list) => {
      console.log(this)
      let index = list.findIndex((todo) => {
        return todo.id === this.state.task.id
      })
      list[index] = this.state.task
      return list
    })
    this.setState({
      editing: false
    })
  }

  deleteTask () {
    DS.mutate('todo-list', (list) => {
      let index = list.findIndex((todo) => {
        return todo.id === this.state.task.id
      })

      list.splice(index, 1)

      return list
    })
  }

  cancelAndRevertChanges (e) {
    this.setState({
      editing: false,
      task: this.state.originalTask
    })
  }

  editForm () {
    return (
      <div className="task">
        <input value={this.state.task.desc} onChange={ this.updateTask } />
        <DateTag className="task__created" date={this.state.task.createdAt} />
        <button onClick={this.saveChanges}>Save Changes</button>
        <button onClick={this.cancelAndRevertChanges}>Cancel</button>
      </div>
    )
  }

  staticForm () {
    return (
      <div className="task">
        <div onClick={this.editTask} className="task__desc">{this.state.task.desc}</div>
        <DateTag className="task__created" date={this.state.task.createdAt} />
        <button onClick={this.deleteTask}>Delete Task</button>
      </div>
    )
  }

  render () {
    let task = null
    if (this.state.editing) {
      task = this.editForm()
    } else {
      task = this.staticForm()
    }

    return (
      task
    )
  }
}

export default Task
