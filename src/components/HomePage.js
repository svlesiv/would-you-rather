import React, { Component } from 'react'
import { connect } from 'react-redux'
import PreviewQuestion from './Question/PreviewQuestion'

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
        {tabState === 0
          ? (
            <article>
              <header>
                <button onClick={()=>this.handleTabChange(0)} className='active-ans'>Unanswered question</button>
                <button onClick={()=>this.handleTabChange(1)} className='not-active'>Answered question</button>
              </header>
              {userNotAnswerIds.map((id)=> (
                <PreviewQuestion key={id} id={id}/>
              ))}
            </article>
          )
          : (
            <article className='answered'>
              <header>
                <button onClick={()=>this.handleTabChange(0)} className='not-active'>Unanswered question</button>
                <button onClick={()=>this.handleTabChange(1)} className='active-ans'>Answered question</button>
              </header>
              {userAnswerIds.map((id)=> (
                <PreviewQuestion key={id} id={id} statistic />
              ))}
            </article>
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
