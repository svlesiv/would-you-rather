import { saveQuestion, saveVote } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_VOTE = 'ADD_VOTE'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    questions,
  }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOneText, optionTwoText) {
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

function addVote(vote) {
    return {
        type: ADD_VOTE,
        vote,
    }
}

export function handleAddVote (vote, questionId) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    return saveVote({
      vote,
      author: authedUser,
      questionId
    })
    .then((data) => dispatch(addVote(data)))
  }
}
