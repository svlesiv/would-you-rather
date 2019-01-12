import { GET_USERS, ADD_USER_VOTE, ADD_USER_QUESTION } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case GET_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_QUESTION :
      const { question } = action
      return {
        ...state,        
        [question.author]: {
          ...state[question.author],
          questions: [...state[question.author].questions, question.id]
        }
      }
    case ADD_USER_VOTE :
      const { vote } = action
      const { questionId, author } = vote
      const option = vote.vote
      return {
        ...state,
        [author]: {
          ...state[author],
          answers: {
            ...state[author].answers,
            [questionId]: option
          }
        }
      }
    default :
      return state
  }
}
