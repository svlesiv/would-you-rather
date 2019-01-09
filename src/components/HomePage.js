import React, { Component } from 'react'
import { connect } from 'react-redux'
import PreviewQuestion from './PreviewQuestion'

class HomePage extends Component {
  state = {
    tabState: 0
  }

  handleTabChange = (num) => {
    this.setState({
      tabState: num
    })
  }

  render() {
    const { userAnswerIds, userNotAnswerIds } = this.props
    const { tabState } = this.state

    return (
      <div>
        <button onClick={()=>this.handleTabChange(0)}>Answered question</button>
        <button onClick={()=>this.handleTabChange(1)}>Unanswered question</button>

          {tabState === 0
            ? (
              <ul>
                {userAnswerIds.map((id)=> (
                  <li key={id}>
                    <PreviewQuestion id={id} statistic />
                  </li>
                ))}
              </ul>
            )
            : (
              <ul>
                {userNotAnswerIds.map((id)=> (
                    <li key={id}>
                      <PreviewQuestion id={id}/>
                    </li>
                  ))}
              </ul>
            )}
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }) {
  return {
    userAnswerIds: Object.keys(users[authedUser].answers)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),

    userNotAnswerIds: Object.keys(questions)
      .filter((id) => Object.keys(users[authedUser].answers).indexOf(id) === -1)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
  }
}

export default connect(mapStateToProps)(HomePage)
