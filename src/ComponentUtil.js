import React from 'react'

export function DateTag (props) {
  return (
    <div className={props.className}>
      { props.date.toLocaleDateString() }
    </div>
  )
}
