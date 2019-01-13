import { getInitialData, saveQuestion, saveVote } from '../utils/api'
import { getUsers, addUserQuestion, addUserVote } from '../actions/users'
import { getQuestions, addQuestion, addVote } from '../actions/questions'
import { showLoading, hideLoading } from 'react-redux-loading-bar'

 export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
        dispatch(hideLoading())
      })
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser})
    .then((question) => {
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question))
      dispatch(hideLoading())
    })
  }
}

export function handleAddVote (vote, questionId) {
  return (dispatch, getState) => {
    dispatch(showLoading())
    const { authedUser } = getState()
    return saveVote({
      vote,
      author: authedUser,
      questionId})
    .then((data) => {
      dispatch(addVote(data))
      dispatch(addUserVote(data))
      dispatch(hideLoading())
    })
  }
}
