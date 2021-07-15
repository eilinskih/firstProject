import { profileAPI, usersAPI } from "../api/api";

let initialState = {
  posts: [
  ],
  profile: null,
  status: ""
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 4,
        message: action.postText
      };
      return {
        ...state,
        posts: [...state.posts, newPost]
      }

    case 'SETPROFILE':
      return {
        ...state,
        profile: action.profile
      }

    case 'SETSTATUS':
      return {
        ...state,
        status: action.status
      }

    case 'UPDATEUSERPHOTO':
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }

    default:
      return state;
  }
}


//ACTION_CREATORS
export const addPost = (postText) => {
  return { type: 'ADD-POST', postText }
}

const setProfile = (profile) => {
  return { type: 'SETPROFILE', profile }
}


const setStatus = (status) => {
  return { type: 'SETSTATUS', status }
}

const updateUserPhoto = (photos) => {
  return { type: 'UPDATEUSERPHOTO', photos }
}

//THUNK_CREATORS
export const getUserProfile = (userId) => (dispatch) => {
  usersAPI.getUserProfile(userId)
    .then(data =>
      dispatch(setProfile(data)))
}

export const getStatus = (userId) => (dispatch) => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}

export const changeStatus = (status) => (dispatch) => {
  profileAPI.setStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}

export const savePhoto = (photo) => (dispatch) => {
  profileAPI.savePhoto(photo)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(updateUserPhoto(response.data.data.photos))
      }
    })
}

export default profileReducer;