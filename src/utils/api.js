import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveVote,
} from './_DATA.js';

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }));
}

export function saveQuestion (option) {
  return _saveQuestion (option);
}

export function saveVote (vote) {
  return _saveVote (vote);
}
