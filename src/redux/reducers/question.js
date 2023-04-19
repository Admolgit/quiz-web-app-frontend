import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAIL
} from '../constants/question';

export const listQuestion = (state = {questions: [] }, action) => {
  switch(action.type) {
    case GET_ALL_QUESTIONS:
      return {
        loading: true,
      }
    case GET_ALL_QUESTION_SUCCESS:
      return {
        loading: false,
        orders: action.payload,
      }
      case GET_ALL_QUESTION_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
      default:
        return state;
  }
}