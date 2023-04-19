import axios from 'axios';
import {
  GET_ALL_QUESTIONS,
  GET_ALL_QUESTION_SUCCESS,
  GET_ALL_QUESTION_FAIL
} from '../constants/question';

export const getAllQuestions = async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_ALL_QUESTIONS,
    });

    // const {
    //   userLogin: { userInfo },
    // } = getState();

    // const config = {
    //   headers: {
    //     Authorization: `Bearer ${userInfo.token}`,
    //   },
    // };

    const { data } = await axios.get(
      `http://localhost:3400/api/questions`
    );

    const response = await data.data

    console.log(data);

    dispatch({
      type: GET_ALL_QUESTION_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_QUESTION_FAIL,
      payload: error.response && error.response.data.message
      ? error.response.data.message
      : error.message,
    })
  }
}