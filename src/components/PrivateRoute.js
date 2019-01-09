import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route {...rest} render={(props) => (
    isAuthenticated
      ? (<div>
          <Nav />
          <Component {...props}/>
         </div>)
      : <Redirect to={{
          pathname: '/login'
        }} />
  )} />
)

function mapStateToProps({users, authedUser}) {
  return {
    isAuthenticated: users[authedUser],
  }
}

export default connect(mapStateToProps, null, null, {pure: false})(PrivateRoute)
