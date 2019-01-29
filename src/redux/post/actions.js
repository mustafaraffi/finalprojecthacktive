
import axios from 'axios';

export const getDataPost = () =>({
  type: 'GET_DATA_POST',
})

export const loginSuccess = (payload) =>({
  type: 'LOGIN_SUCCESS',
  payload,
})