import React, {Component} from 'react'
import {connect} from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../../actions/shared'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false,
  }

  handleChangeOne = (e) => {
    const optionOneValue = e.target.value
     this.setState(() => ({
      optionOne: optionOneValue
    }))
  }

  handleChangeTwo = (e) => {
    const optionTwoValue = e.target.value
     this.setState(() => ({
      optionTwo: optionTwoValue
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
     const { optionOne, optionTwo } = this.state
     const { dispatch } = this.props

     dispatch(handleAddQuestion(optionOne, optionTwo))

     this.setState(() => ({
       optionOne: '',
       optionTwo: '',
       toHome: true,
    }))
  }

  render() {
    const { optionOne, optionTwo, toHome } = this.state

     if (toHome === true) {
      return <Redirect to='/' />
    }

     return (
      <div>
        <form onSubmit={this.handleSubmit} className='new-q-form'>
          <legend>Compose a new Question</legend>

          <label htmlFor='optionOne'>Option One</label>
          <input type='text' id='optionOne' name='optionOne' onChange={this.handleChangeOne}/>

          <label htmlFor='optionTwo'>Option Two</label>
          <input type='text' id='optionTwo' name='optionTwo' onChange={this.handleChangeTwo}/>

          <button type='submit' disabled={optionOne === '' || optionTwo === '' }>
              Submit
          </button>
        </form>
      </div>
    )
  }
}

export default connect()(NewQuestion)
