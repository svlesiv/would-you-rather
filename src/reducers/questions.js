import { GET_QUESTIONS, ADD_QUESTION, ADD_VOTE } from '../actions/questions';

export default function questions (state = {}, action) {
  switch(action.type) {
    case GET_QUESTIONS :
      const { questions } = action;
      return {
        ...state,
        ...questions,
      };
    case ADD_QUESTION :
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    case ADD_VOTE :
      const { vote } = action;
      const { questionId, author } = vote;
      const option = vote.vote;

      return {
        ...state,
        [questionId]: {
          ...state[questionId],
          [option]: {
            ...state[questionId][option],
            votes: state[questionId][option].votes.concat(author)
          },
        },
      };
    default :
      return state;
  }
}
