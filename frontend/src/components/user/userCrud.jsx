import React, {Component} from 'react'
import Main from '../template/main'

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'Register User: Add, List, Change and Remove'
}

const baseURL = 'http://localhost:3001/users'

class User extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: '',
      email: '',
      list: []
    }
  }

  clear(){
    this.setState({ user: this.state.user })
  }

  save(){
    const user   = this.state.user
    const method = user.id ? 'put' : 'post'
    const url    = user.id ? `${baseURL}/${user.id}` : baseURL

    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: this.state.user, list })
      })
  }

  getUpdatedList(user){
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)

    return list
  }

  render(){
    return (
      <Main  {...headerProps}>
        Register User
      </Main>

    )
  }
}


export default User
