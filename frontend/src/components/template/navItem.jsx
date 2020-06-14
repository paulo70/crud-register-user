import React from 'react'

export default props =>
  <a href={props.links}>
    <i className={`fa fa-${props.icon}`}></i> {props.label}
  </a>
