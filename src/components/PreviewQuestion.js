import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PreviewQuestion extends Component {
  render() {
    const { question } = this.props

    return (
      <div>
        <p>{question.author} asks:</p>
        <h1>Would You Rather...</h1>
        <p>...{question.optionOne.text}...</p>
        <Link to={`/question/${question.id}`}>View Poll </Link>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]
   return {
    question,
  }
}

export default connect(mapStateToProps)(PreviewQuestion)
