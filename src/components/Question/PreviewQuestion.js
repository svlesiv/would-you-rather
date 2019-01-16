import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class PreviewQuestion extends Component {
  render() {
    const { question, user, users } = this.props

    return (
      <section>
        <h1 className='compl-accent-text'>{user.name} asks:</h1>
        <div className='flex-container'>
          <img src={user.avatarURL} alt={user.name} className='img-preview'/>
          <div>
            <h2>Would You Rather...</h2>
            <p>...{question.optionOne.text}...</p>
            {this.props.statistic
              ? <Link to={`/statistic/${question.id}`}>View Poll</Link>
              : <Link to={`/question/${question.id}`}>View Poll</Link>
            }
          </div>
        </div>
      </section>
    )
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id]
   return {
    question,
    user: users[question.author],
    users,
  }
}

export default connect(mapStateToProps)(PreviewQuestion)
