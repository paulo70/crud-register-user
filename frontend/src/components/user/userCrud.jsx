import React, {Component} from 'react'
import axios from 'axios'

import Main   from '../template/main'
import Form   from '../template/form'
import Input  from '../template/formGroup'
import Grid   from '../../utils/grids'
import Row    from '../../utils/row'
import Button from '../../utils/button'

const headerProps = {
  icon: 'users',
  title: 'Users',
  subtitle: 'Register User: Add, List, Change and Remove'
}

const baseURL = 'http://localhost:3001/users'

const initialState = {
    user: { name: '', email: '' },
    list: []
}

class User extends Component {

  constructor(props){
    super(props)

    this.state = {
      user: { name:'', email:'' },
      list: []
    }
  }

  clear(){
    this.setState({ user: initialState.user })
  }

  save(){
    const user   = this.state.user
    const method = user.id ? 'put' : 'post'
    const url    = user.id ? `${baseURL}/${user.id}` : baseURL

    axios[method](url, user)
      .then(resp => {
        const list = this.getUpdatedList(resp.data)
        this.setState({ user: initialState.user, list })
      })
  }

  getUpdatedList(user){
    const list = this.state.list.filter(u => u.id !== user.id)
    list.unshift(user)

    return list
  }

  updateField(event){
    const user = {...this.state.user}
    user[event.target.name] = event.target.value

    this.setState({ user })
  }

  renderForm() {
    return (
      <Form>
        <Row>
          <Grid cols='12 6'>
            <Input
              label = 'name'
              name  = 'name'
              value = { this.state.user.name }
              placeholder = 'Digite o nome'
              fn = { e => this.updateField(e) }
              />
          </Grid>

          <Grid cols='12 6'>
            <Input
              label = 'email'
              name  = 'email'
              value = { this.state.user.email }
              placeholder = 'Digite o e-mail'
              fn = { e => this.updateField(e) }
              />
          </Grid>
        </Row>
        <Row>
          <Grid cols='12'>
            <Button classes='btn btn-primary' fn={e => this.save(e)}>
              Salvar
            </Button>

            <Button classes='btn btn-secondary ml-2' fn={e => this.clear(e)}>
              Cancelar
            </Button>

          </Grid>
        </Row>
      </Form>
    )
  }

  render(){
    return (
      <Main  {...headerProps}>
        Register User
        {this.renderForm()}
      </Main>

    )
  }
}


export default User
