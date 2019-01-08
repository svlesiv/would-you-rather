import React, { Component } from 'react'
import {connect} from 'react-redux'
import {logIn} from '../actions/authedUser'

class Login extends Component {
  state = {
    username: ''
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
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select onChange={this.handleChange}>
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
