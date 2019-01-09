import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'

import PrivateRoute from './PrivateRoute'
// import Nav from './Nav'
import Login from './Login'
import HomePage from './HomePage'
import NewQuestion from './NewQuestion'
import QuestionPage from './QuestionPage'
import QuestionStatisticPage from './QuestionStatisticPage'
import LeaderBoard from './LeaderBoard'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <div>
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/' exact component={HomePage}/>
            <PrivateRoute path='/new' exact component={NewQuestion}/>
            <PrivateRoute path='/statistic/:statistic_id' exact component={QuestionStatisticPage}/>
            <PrivateRoute path='/question/:question_id' exact component={QuestionPage}/>
            <PrivateRoute path='/leaders' exact component={LeaderBoard}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
