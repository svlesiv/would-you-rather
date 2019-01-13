import React, {Component} from 'react'
import { Redirect, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'

class  PrivateRoute extends Component {
  render(){
    const { component: Component, isAuthenticated, ...rest } = this.props
    return (
      <Route {...rest} render={(props) => (
        isAuthenticated
          ? (<div>
              <Nav />
              <Component {...props}/>
             </div>)
          : <Redirect to={{
              pathname: '/login',
              state: { from: this.props.location }
            }} />
      )} />
    )
  }
}

function mapStateToProps({users, authedUser}) {
  return {
    isAuthenticated: users[authedUser],
  }
}

export default connect(mapStateToProps)(PrivateRoute)
