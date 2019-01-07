import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class PreviewQuestion extends Component {
  render() {
    const { question } = this.props

    return (
      <div>
        <p>{question.author} asks:</p>
        <h1>Would You Rather...</h1>
        <p>...{question.optionOne.text}...</p>
        <a>View Poll </a>
        <Question id={question.id}/>
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
