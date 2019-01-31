
const postState = {
  users :
  [ {
      id: '01',
      username: 'romeulukiki',
      avatarimage: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/588000/620x/Romelu-Lukaku-695929.jpg',
      postdate: "20190128",
      postimage: 'https://images.beinsports.com/dp9FPNh9hVAe2rBgbZHB0E7pG_c=/full-fit-in/1000x0/romelu-lukaku-and-marouane-fellaini-cropped_zkghnld5kqk15j51ftftormo.jpg',
      caption: '3 Point!!!',
      likeCount: 3,
      isLiked:false,
      comments : [
        {
          user: 'romario',
          comment: 'This Guy is lit',
        },
        {
          user: 'gazidis',
          comment: 'Well Played!!',
        },
      ]
    },
    {
      id: '02',
      username: 'pcutrone63',
      avatarimage: 'https://i.dailymail.co.uk/i/newpix/2018/08/31/21/4F941C6A00000578-6120011-image-a-20_1535747710724.jpg',
      postdate: "20190127",
      postimage: 'https://pbs.twimg.com/profile_images/970305264468586497/QtUrwvyu_400x400.jpg',
      caption: 'FORZA MILAAN!',
      likeCount: 4,
      isLiked:false,
      comments : [
        {
          user: 'inzaghi',
          comment: 'Future Of Milan',
        },
        {
          user: 'romagnoli',
          comment: 'Keep it up Boy',
        },
      ]
    },
    {
      id: '03',
      username: 'ppogboom',
      avatarimage: 'https://cdn.images.dailystar.co.uk/dynamic/58/photos/210000/620x/Man-Utd-Pogba-738259.jpg',
      postdate: "20190126",
      postimage: 'https://static.standard.co.uk/s3fs-public/thumbnails/image/2018/11/22/13/paulpogba2211.jpg?w968',
      caption: 'Haters gonna Hate',
      likeCount: 5,
      isLiked:false,
      comments : [
        {
          user: 'linggard',
          comment: 'Dab Nation',
        },
        {
          user: 'rashford',
          comment: 'Ma Maaannn!',
        },
      ]
    },

      
  ],
  email: "",
  fullname: "",
  profilename: "",
  password: "",
  isLogin: false,
}

const Post = (state ={...postState}, actions) => {
  switch (actions.type) {
    case 'GET_DATA_POST':
    return{
      ...state,
    }
    case 'LOGIN_SUCCESS':
    return{
      ...state,
      isLogin: true,
      email: actions.payload.email,
      fullname: actions.payload.fullname,
      profilename: actions.payload.profilename,
      password: actions.payload.password,
    }

    case 'LIKE_POST':
    return{
      ...state,
      users: state.users.map(
        (user) => user.id === actions.payload ? 
          (
            !user.isLiked ?
            {...user, isLiked: true, likeCount: user.likeCount + 1,}:
            {...user, isLiked: false, likeCount: user.likeCount - 1,}
          )
      : user 
      ),
    }
    
    case 'ADD_COMMENT':
    return{
      ...state,
      users: state.users.map(
        (user) => user.id === actions.payload.id ? 
          {...user, comments: [...user.comments, actions.payload.comments],}           
      : user 
      ),
    }
    default:
      return state
  }
}

export default Post;