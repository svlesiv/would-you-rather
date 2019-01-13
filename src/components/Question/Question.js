import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatQuestion } from '../../utils/helpers'
import { withRouter } from 'react-router-dom'
import { handleAddVote } from '../../actions/shared'

class Question extends Component {
  state = {
    option: 'optionOne',
  }

  handleChange = (vote) => {
    this.setState({
      option: vote
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch, id } = this.props
    const { option } = this.state

    dispatch(handleAddVote(option, id))
    this.props.history.push(`/statistic/${id}`)
  }

  render() {
    const { question, user } = this.props
    const { author, optionOne, optionTwo } = question

    return (
      <div>
        <p>{author} asks:</p>
        <img src={user.avatarURL} />
        <form onSubmit={this.handleSubmit}>
          <h1>Would You Rather...</h1>

          <input type="radio" name="question" value="optionOne" defaultChecked onChange={()=>this.handleChange('optionOne')}/>
          <label htmlFor="optionOne">{optionOne.text}</label>

          <input type="radio" name="question" value="optionTwo" onChange={()=>this.handleChange('optionTwo')}/>
          <label htmlFor="optionTwo">{optionTwo.text}</label>

          <button type='submit'>
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

export default withRouter(connect(mapStateToProps)(Question))
