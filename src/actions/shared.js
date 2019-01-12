import { getInitialData, saveQuestion, saveVote } from '../utils/api'
import { getUsers, addUserQuestion, addUserVote } from '../actions/users'
import { getQuestions, addQuestion, addVote } from '../actions/questions'

 export function handleInitialData () {
  return (dispatch) => {
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(getUsers(users))
        dispatch(getQuestions(questions))
      })
  }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser})
    .then((question) => {
      dispatch(addQuestion(question))
      dispatch(addUserQuestion(question))
    })
  }
}

export function handleAddVote (vote, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveVote({
      vote,
      author: authedUser,
      questionId})
    .then((data) => {
      dispatch(addVote(data))
      dispatch(addUserVote(data))
    })
  }
}
