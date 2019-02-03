
const profileState = {
  profilename: "",
  fullname:"",
  bio:"",
  profile_picture: "https://www.damiadenuga.com.ng/wp-content/uploads/2019/01/Higuain-500x500.jpg",
  galery:[
    "https://loremflickr.com/cache/resized/4827_46223663272_a329115870_n_320_240_nofilter.jpg",
    "https://loremflickr.com/cache/resized/4813_46653823072_ea1915c7e9_320_240_nofilter.jpg",
    "https://loremflickr.com/cache/resized/7848_31828778427_ff2a1a8b1b_n_320_240_nofilter.jpg",
  ],
  followers: "300K",
  following: "180",
  isLoading: true,
  error: {
    status: false,
    message:'',
  },
}

const Profile = (state ={...profileState}, actions) => {
  switch (actions.type) {
    case 'GET_PROFILE_REQUEST':
    return{
      ...state,
      isLoading: true,
    }
    case 'GET_PROFILE_SUCCESS':
    return{
      ...state,
      isLoading: false,
      profilename: actions.payload[0].user.username,
      fullname: actions.payload[0].user.name,
      bio: actions.payload[0].user.bio,
      profile_picture: actions.payload[0].user.profile_image.large,
      galery: actions.payload.map(
        (photo) => (
          photo.urls.small
        )
      ),
      followers: "300K",
      following: "180",
    }
    case 'GET_PROFILE_FAILED':
    return{
      ...state,
      isLoading: false,
      error:{
        status: true,
        message: actions.payload,
      }
    }
    default:
      return state
  }
}

export default Profile;