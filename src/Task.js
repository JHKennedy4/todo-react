import React, { Component } from 'react'

class Task extends Component {
  render () {
    return (
      <div>{this.props.desc}</div>
    )
  }
}

export default Task
