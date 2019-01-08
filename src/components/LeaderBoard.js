import React, { Component } from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends Component {
  render() {
    const { users, usersIds } = this.props
    return (
      <div>
        {usersIds.map((user)=>(
          <div key={user}>
            <p>{users[user].name}</p>
            <p>Answered questions: {Object.keys(users[user].answers).length}</p>
            <p>Created questions: {users[user].questions.length}</p>
          </div>
        ))}
      </div>
    )
  }
}

function mapStateToProps ({users}) {
   return {
    usersIds: Object.keys(users),
    users,
  }
}

export default connect(mapStateToProps)(LeaderBoard)
