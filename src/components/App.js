import React, { Component } from 'react';
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'

//will be deleted
import HomePage from './HomePage'

class App extends Component {

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
        <p>This is my App</p>
        <HomePage />
      </div>
    );
  }
}

export default connect()(App);
