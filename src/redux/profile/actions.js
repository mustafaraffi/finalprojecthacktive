import axios from 'axios';

export const getProfileRequest = () =>({
  type: 'GET_PROFILE_REQUEST',
})

export const getProfileSuccess = (payload) =>({
  type: 'GET_PROFILE_SUCCESS',
  payload,
})

export const getProfileFailed = (payload) =>({
  type: 'GET_PROFILE_FAILED',
  payload,
})

export const getDataProfileAPI = () =>{
  return (dispatch) =>{
    dispatch(getProfileRequest());
    axios.get("https://api.unsplash.com/users/wildlittlethingsphoto/photos/?client_id=6448df1ddf150a145eeca914bab7b86055921bf1027892fbff4e5a85498074d2")
    .then(response => {
      console.log(response);
      dispatch(getProfileSuccess(response.data))
    })
    .catch(
      ()=>{
        const error = "GAGAL FETCHING";
        dispatch(getProfileFailed(error))
      }
    )
  }
}