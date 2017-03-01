import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { DS } from './DataStore.js'
import './index.css'

DS.init('todo-list', [
  {
    desc: 'hello'
  },
  {
    desc: 'world'
  },
  {
    desc: "how's"
  },
  {
    desc: 'it'
  },
  {
    desc: 'going'
  }
])

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
