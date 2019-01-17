import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatQuestion } from '../../utils/helpers';
import { withRouter } from 'react-router-dom';
import { handleAddVote } from '../../actions/shared';

class Question extends Component {
  state = {
    option: 'optionOne'
  };

  /**
  * @description Change the state of the option based on the user input
  * @param {object} e - user input
  */
  handleChange = (vote) => {
    this.setState({
      option: vote
    });
  };

  /**
  * @description Dispatch action of adding a vote to the store and
  *              redirect to the QuestionStatistic page
  * @param {object} e - submit event
  */
  handleSubmit = (e) => {
    e.preventDefault();
    const { dispatch, id } = this.props;
    const { option } = this.state;
    dispatch(handleAddVote(option, id));

    setTimeout(() => {
      this.props.history.push(`/statistic/${id}`)
    }, 500);
  };

  render() {
    const { question, user } = this.props;
    const { optionOne, optionTwo } = question;

    return (
      <div>
        <h1 className='accent-text'>{user.name} asks:</h1>
        <div className='flex-container'>
          <img src={user.avatarURL} alt={user.name}/>
          <form onSubmit={this.handleSubmit} className='poll-form'>
            <legend>Would You Rather...</legend>
            <label>
              <input type='radio' name='question' value='optionOne' defaultChecked
                     onChange={()=>this.handleChange('optionOne')}/>
              {optionOne.text}
            </label>
            <label>
              <input type='radio' name='question' value='optionTwo'
                     onChange={()=>this.handleChange('optionTwo')}/>
              {optionTwo.text}
            </label>
            <button type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps ({users, questions}, { id }) {
  const question = questions[id];
  return {
    user: users[question.author],
    question: question
      ? formatQuestion(question)
      : null
  };
}

export default withRouter(connect(mapStateToProps)(Question));
