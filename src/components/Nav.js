import React, { Component } from 'react'
import './nav.scss'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logOut } from '../actions/authedUser'


class Nav extends Component {
  handleLogout = () => {
    const { dispatch, authedUser } = this.props
    dispatch(logOut(authedUser))
  }

  render(){
    const { isAuthenticated, username } = this.props

    return (
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/add' activeClassName='active'>
              New Question
            </NavLink>
          </li>
          <li>
            <NavLink to='/leaderboard' activeClassName='active'>
              Leader Board
            </NavLink>
          </li>
          {isAuthenticated
            ? (<>
                 <li>
                   <p>Hello, {username}</p>
                 </li>
                 <li>
                   <button onClick={this.handleLogout}>Logout</button>
                 </li>
               </>)
            : null
          }
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({users, authedUser}) {
  return {
    isAuthenticated: users[authedUser],
    authedUser,
    username: users[authedUser].name,
  }
}

export default connect(mapStateToProps)(Nav)
