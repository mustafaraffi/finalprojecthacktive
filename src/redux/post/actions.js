
import axios from 'axios';

export const getDataPost = () =>({
  type: 'GET_DATA_POST',
})

export const loginSuccess = (payload) =>({
  type: 'LOGIN_SUCCESS',
  payload,
})

export const likedPost = (payload) =>({
  type: 'LIKE_POST',
  payload,
})

export const addComment = (payload) =>({
  type: 'ADD_COMMENT',
  payload,
})