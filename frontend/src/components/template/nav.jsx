import './nav.css'

import React from 'react'
import Item from './navItem'

export default props =>
  <aside className='menu-area'>
    <nav className='menu'>
      <Item url="/"      icon='home'  label='Início' />
      <Item url='/users' icon='users' label='Users' />
    </nav>
  </aside>
