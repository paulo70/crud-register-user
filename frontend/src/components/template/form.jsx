import React from 'react'

import Row  from '../../utils/row'
import Grid from '../../utils/grids'

export default props =>
  <div className='form'>
    <Row>
      { props.children }
    </Row>
  </div>
