import React, { Component } from 'react'
import './login.scss'
import { connect } from 'react-redux'
import { logIn } from '../actions/authedUser'
import { Redirect, withRouter } from 'react-router-dom'

class Login extends Component {
  state = {
    username: '',
    redirect: this.props.isAuthenticated
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
     redirect: true,
   }))
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirect, username } = this.state
    const { userNames } = this.props

    if (redirect === true) {
      return <Redirect to={from} />
    }

    return (
      <div className='gridWrapper'>
        <header>
          <h1>Welcome to the Would You Rather App</h1>
        </header>
        <main>
          <form onSubmit={this.handleSubmit}>
            <legend>Please sign in to continue</legend>
            <select onChange={this.handleChange}>
              <option defaultValue = ''>-- select your username -- </option>
              {userNames.map((user)=>(
                <option value={user} key={user}>{user}</option>
                ))}
            </select>
            <button type='submit' disabled={username===''}>Sign in</button>
          </form>
        </main>
      </div>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    userNames: Object.keys(users),
    username: authedUser,
    isAuthenticated: users[authedUser],
  }
}

export default withRouter(connect(mapStateToProps)(Login))
