import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

// import PrivateRoute from './PrivateRoute'
import Nav from './Nav'
import Login from './Login'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route path='/login' exact component={Login} />
            <Route path='/' exact component={HomePage}/>
            <Route path='/new' exact component={NewQuestion}/>
            <Route path='/question/:id' exact component={QuestionPage}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
