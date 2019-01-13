import React, { Component } from 'react'
import { connect } from 'react-redux'
import { logIn } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    toHome: false,
  }

  handleChange = (e) => {
    const username = e.target.value;
    this.setState({
      username
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(logIn(this.state.username))

    this.setState(() => ({
     toHome: true,
   }))
  }

  render() {

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div>
        <h1>Welcome to the Would You Rather App</h1>
        <h2>Please sign in to continue</h2>
        <h3>Sign in</h3>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
            <option defaultValue = ''>-- select your username -- </option>
            {this.props.userNames.map((user)=>(
              <option value={user} key={user}>{user}</option>
              ))}
          </select>
          <button type='submit' disabled={this.state.username===''}>Sign in</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    userNames: Object.keys(users),
    username: authedUser,
  }
}

export default connect(mapStateToProps)(Login)
