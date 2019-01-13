import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import LoadingBar from 'react-redux-loading-bar'

import PrivateRoute from './PrivateRoute'
// import Nav from './Nav'
import Login from './Login'
import HomePage from './HomePage'
import NewQuestion from './Question/NewQuestion'
import QuestionPage from './Question/QuestionPage'
import QuestionStatisticPage from './Question/QuestionStatisticPage'
import LeaderBoard from './LeaderBoard'
import NotFound from './NotFound'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }

  render() {
    return (
      <Router>
        <div>
          <LoadingBar />
          <div>
            <Route path='/login' exact component={Login} />
            <PrivateRoute path='/404' exact component={NotFound} />
            <PrivateRoute path='/' exact component={HomePage}/>
            <PrivateRoute path='/add' exact component={NewQuestion}/>
            <PrivateRoute path='/statistic/:statistic_id' exact component={QuestionStatisticPage}/>
            <PrivateRoute path='/question/:question_id' exact component={QuestionPage}/>
            <PrivateRoute path='/leaderboard' exact component={LeaderBoard}/>
          </div>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
