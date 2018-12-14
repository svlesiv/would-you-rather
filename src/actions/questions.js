import { saveQuestion } from '../utils/api'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'

export function getQuestions (questions) {
  return {
    type: GET_QUESTIONS,
    question,
  }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question,
    }
}

export function handleAddQuestion (optionOne, optionTwo) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
     return saveQuestion({
      optionOne,
      optionTwo,
      author: authedUser
    })
      .then((question) => dispatch(addQuestion(question)))
  }
}
