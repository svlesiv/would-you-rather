export const GET_USERS = 'GET_USERS';
export const ADD_USER_VOTE = 'ADD_USER_VOTE';
export const ADD_USER_QUESTION = 'ADD_USER_QUESTION';

export function getUsers (users) {
  return {
    type: GET_USERS,
    users,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USER_QUESTION,
    question,
  };
}

export function addUserVote(vote) {
  return {
    type: ADD_USER_VOTE,
    vote,
  };
}
