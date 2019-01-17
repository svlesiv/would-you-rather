import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionStatistic extends Component {
  /**
  * @description Calculates the percentage of people who voted for a specific option
  * @param {number} numVotes1 - number of votes for the first option
  * @param {number} numVotes2 - number of votes for the second option
  */
  calculatePercentage(numVotes1, numVotes2) {
    let num = (100 * numVotes1)/(numVotes1 + numVotes2)
    return Math.round(num);
  }

  render() {
    const { question, user, authedUser, users } = this.props;
    const { optionOne, optionTwo } = question;
    const numVotes1 = optionOne.votes.length;
    const numVotes2 = optionTwo.votes.length;
    const sum  = numVotes1 + numVotes2;

    return (
      <article>
        <h1 className='compl-accent-text'>Asked by {user.name}</h1>
        <div className='flex-container'>
          <img src={user.avatarURL} alt={user.name}/>
          <div className='poll-res-section'>
            <h2 className='accent-text'>Results</h2>
            <section className={users[authedUser].answers[question.id]==='optionOne' ? 'highlightPoll' : ''}>
              <h3>{optionOne.text}</h3>
              <p>{this.calculatePercentage(numVotes1, numVotes2)}%</p>
              <p>{numVotes1} out of {sum} votes</p>
            </section>
            <section className={users[authedUser].answers[question.id]==='optionTwo' ? 'highlightPoll' : ''}>
              <h3>{optionTwo.text}</h3>
              <p>{this.calculatePercentage(numVotes2, numVotes1)}%</p>
              <p>{numVotes2} out of {sum} votes</p>
            </section>
          </div>
        </div>
      </article>
    );
  }
}

function mapStateToProps ({ questions, users, authedUser }, { id }) {
  const question = questions[id];
  return {
    question,
    user: users[question.author],
    authedUser,
    users,
  };
}

export default connect(mapStateToProps)(QuestionStatistic);
