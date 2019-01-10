import { saveQuestion } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

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
