import React, { Component } from 'react'

class DatePicker extends Component {
  render () {
    return (
      <div className="date-picker">
        <div className="row">
          // these should be hidden checkboxes
          <button>This</button>
          <button>Next</button>
          <button>The following</button>
        </div>
        <div className="row">
          // these should be hidden checkboxes
          <button>Today</button>
          <button>Thursday</button>
          <button>Friday</button>
          <button>Saturday</button>
          <button>Sunday</button>
          <button>Monday</button>
          <button>Tuesday</button>
        </div>
      </div>
    )
  }
}
