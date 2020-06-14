import React from 'react'

export default props =>
  <div className="form-group">
    { props.label }
    <input type = 'text' className = 'form-control'
      name        = { props.name }
      value       = { props.value }
      placeholder = { props.placeholder }
      onChange    = { props.fn }
      />
  </div>
