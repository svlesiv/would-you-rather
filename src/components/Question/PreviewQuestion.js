import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PreviewQuestion extends Component {
  render() {
    const { question, user } = this.props

    return (
      <div>
        <p>{question.author} asks:</p>
        <img src={user.avatarURL} alt={user.name}/>
        <h1>Would You Rather...</h1>
        <p>...{question.optionOne.text}...</p>
        {this.props.statistic
          ? <Link to={`/statistic/${question.id}`}>View Poll</Link>
          : <Link to={`/question/${question.id}`}>View Poll</Link>
        }
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]
   return {
    question,
    user: users[question.author]
  }
}

export default connect(mapStateToProps)(PreviewQuestion)
