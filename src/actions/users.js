import { saveVote } from '../utils/api'

export const GET_USERS = 'GET_USERS'
export const ADD_USER_VOTE = 'ADD_USER_VOTE'

export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
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
