import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuestionStatistic from './QuestionStatistic';

class QuestionStatisticPage extends Component {
  render() {
    const { id } = this.props;
    return (
      <div>
        <QuestionStatistic id={id}/>
      </div>
    );
  }
}

function mapStateToProps ({users, questions}, props) {
  const { statistic_id } = props.match.params;
   return {
    id: statistic_id
  };
}

export default connect(mapStateToProps)(QuestionStatisticPage);
