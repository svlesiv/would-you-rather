import React, {Component} from 'react'
import { Redirect, Route, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import Nav from './Nav'
import NotFound from './NotFound'



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

export default withRouter(connect(mapStateToProps, null, null, {pure: false})(PrivateRoute))
