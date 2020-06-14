import React from 'react'

export default props =>
  <button className={props.classes} onClick={props.fn}>
    {props.children}
  </button>
