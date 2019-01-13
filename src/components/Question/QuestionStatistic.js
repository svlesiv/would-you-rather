import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionStatistic extends Component {
  calculatePercentage(one, two){
    return (100 * one)/(one+two)
  }

  render() {
    const { question, user } = this.props
    const { author, optionOne, optionTwo } = question
    const numVotes1 = optionOne.votes.length
    const numVotes2 = optionTwo.votes.length
    const sum  = numVotes1 + numVotes2

    return (
      <div>
        <p>Asked by {author}</p>
        <img src={user.avatarURL} />
        <h3>Results</h3>
        <h4>{optionOne.text}</h4>
        <p>{numVotes1} out of {sum}</p>
        <p>{this.calculatePercentage(numVotes1, numVotes2)}</p>

        <h4>{optionTwo.text}</h4>
        <p>{numVotes2} out of {sum}</p>
        <p>{this.calculatePercentage(numVotes2, numVotes1)}</p>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { id }) {
  const question = questions[id]
  return {
    question,
    user: users[question.author],
  }
}

export default connect(mapStateToProps)(QuestionStatistic)
