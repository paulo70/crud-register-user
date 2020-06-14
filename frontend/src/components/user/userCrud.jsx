import React, {Component} from 'react'
import Main from '../template/main'

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'Register User: Add, List, Change and Remove'
}

class User extends Component {

  render(){
    return (
      <Main  {...headerProps}>
        Register User
      </Main>

    )
  }
}


export default User
