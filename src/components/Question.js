import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion, formatDate } from '../utils/helpers'

class Question extends Component {
  render() {
    const { question, user } = this.props
    const { author, optionOne, optionTwo } = question

    return (
      <div>
        <p>{author} asks:</p>
        <img src={user.avatarURL} />
        <form>
          <h1>Would You Rather...</h1>

          <input type="radio" name="question" value="optionOne" defaultChecked />
          <label htmlFor="optionOne">{optionOne.text}</label>

          <input type="radio" name="question" value="optionTwo" />
          <label htmlFor="optionTwo">{optionTwo.text}</label>

          <button
              type='submit'>
                Submit
            </button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]
   return {
    user: users[question.author],
    question: question
      ? formatQuestion(question)
      : null
  }
}

export default connect(mapStateToProps)(Question)
