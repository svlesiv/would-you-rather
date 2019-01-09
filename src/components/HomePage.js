import React, { Component } from 'react'
import { connect } from 'react-redux'
import PreviewQuestion from './PreviewQuestion'

class HomePage extends Component {
  render() {
    const { userAnswerIds, userNotAnswerIds} = this.props

    return (
      <div>
        <p>This is my HomePage</p>

        <h3>Answered question</h3>
        <ul >
          {userAnswerIds.map((id)=> (
            <li key={id}>
              <PreviewQuestion id={id} statistic />
            </li>
          ))}
        </ul>

        <h3>Unanswered question</h3>
        <ul>
          {userNotAnswerIds.map((id)=> (
              <li key={id}>
                <PreviewQuestion id={id}/>
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    // questionIds: Object.keys(questions)
    //   .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    userAnswerIds: Object.keys(users[authedUser].answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    userNotAnswerIds: Object.keys(questions)
      .filter((id) => Object.keys(users[authedUser].answers).indexOf(id) === -1)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(HomePage)
