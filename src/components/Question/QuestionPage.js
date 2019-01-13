import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question from './Question'

class QuestionPage extends Component {
  render() {
    const { id } = this.props

    return (
      <div>
        <Question id={id}/>
      </div>
    )
  }
}

function mapStateToProps ({users, questions}, props) {
  const { question_id } = props.match.params
   return {
    id: question_id,
  }
}

export default connect(mapStateToProps)(QuestionPage)
