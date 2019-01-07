import React, { Component } from 'react'
import { connect } from 'react-redux'
import PreviewQuestion from './PreviewQuestion'

class HomePage extends Component {
  render() {
    return (
      <div>
        <p>This is my HomePage</p>
        {//tab for unanswered question
        //list questions, get each question from a db
      }
        <ul >
          {this.props.questionIds.map((id) => (
            <li key={id}>
              <PreviewQuestion id={id}/>
            </li>
          ))}
        </ul>

        {//tab for answered question
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions }) {
  return {
    questionIds: Object.keys(questions)
      .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  }
}

export default connect(mapStateToProps)(HomePage)
