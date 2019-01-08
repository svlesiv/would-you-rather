import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/authedUser'

class Nav extends Component {
  handleLogout = () => {
    const { dispatch } = this.props
    dispatch(logOut(this.props.authedUser))
  }

  render(){
    return (
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaders' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          <li>
            {this.props.isAuthenticated
              ? <button onClick={this.handleLogout}>Logout</button>
              : null
            }
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    isAuthenticated: users[authedUser],
    authedUser,
  }
}

export default connect(mapStateToProps)(Nav)
