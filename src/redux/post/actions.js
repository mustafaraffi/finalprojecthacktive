
import axios from 'axios';

export const getDataPost = () =>({
  type: 'GET_DATA_POST',
})

export const loginSuccess = (payload) =>({
  type: 'LOGIN_SUCCESS',
  payload,
})

export const doLogout = () =>({
  type: 'LOGOUT_SUCCESS',
})

export const likedPost = (payload) =>({
  type: 'LIKE_POST',
  payload,
})

export const addComment = (payload) =>({
  type: 'ADD_COMMENT',
  payload,
})

export const getDataPostRequest = () =>({
  type: 'GET_DATA_POST_REQUEST',
})

export const getDataPostSuccess = (payload) =>({
  type: 'GET_DATA_POST_SUCCESS',
  payload,
})

export const getDataPostFailed = (payload) =>({
  type: 'GET_DATA_POST_FAILED',
  payload,
})

export const getDataPostAPI = () =>{
  return (dispatch) =>{
    dispatch(getDataPostRequest());
    axios.get("https://api.unsplash.com/photos/?client_id=6448df1ddf150a145eeca914bab7b86055921bf1027892fbff4e5a85498074d2")
    .then(response => {
      dispatch(getDataPostSuccess(response.data))
    })
    .catch(
      ()=>{
        const error = "GAGAL FETCHING";
        dispatch(getDataPostFailed(error))
      }
    )
  }
}