import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveVote,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}

export function saveQuestion (optionOneText, optionTwoText, author) {
  return _saveQuestion (optionOneText, optionTwoText, author)
}

export function saveVote (vote) {
  return _saveVote (vote)
}
