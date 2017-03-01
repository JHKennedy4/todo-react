import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DS } from './DataStore.js'
import './index.css'
import TaskModel from './TaskModel.js'

DS.init('todo-list', [
  new TaskModel('hello'),
  new TaskModel('world'),
  new TaskModel("how's"),
  new TaskModel('it'),
  new TaskModel('going')
])

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
