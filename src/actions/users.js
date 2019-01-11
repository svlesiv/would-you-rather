import { saveQuestion, saveVote } from '../utils/api'

export const GET_USERS = 'GET_USERS'
export const ADD_USER_VOTE = 'ADD_USER_VOTE'
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  }
}

function addQuestion(question) {
    return {
        type: ADD_USER_QUESTION,
        question,
    }
}

export function handleAddUserQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
    .then((question) => dispatch(addQuestion(question)))
  }
}

function addUserVote(vote) {
    return {
        type: ADD_USER_VOTE,
        vote,
    }
}

export function handleAddUserVote (vote, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveVote({
      vote,
      author: authedUser,
      questionId
    })
    .then((data) => dispatch(addUserVote(data)))
  }
}
