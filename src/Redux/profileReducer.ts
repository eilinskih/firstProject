import { GetProfileType, PhotosType, profileAPI, usersAPI } from "../api/api";
import { AppDispatch } from "./redux-store";

const ADD_POST = 'ADD_POST';
const SETPROFILE = 'SETPROFILE';
const SETSTATUS = 'SETSTATUS';
const UPDATEUSERPHOTO = 'UPDATEUSERPHOTO';


export type PostType = {id: number, message: string}
export type ProfileStateType = { posts: PostType[], profile: null | GetProfileType, status: string }

const initialState: ProfileStateType = {
  posts: [],
  profile: null,
  status: ""
}


const profileReducer = (state: ProfileStateType = initialState, action: ActionsType): ProfileStateType => {

  switch (action.type) {
    case 'ADD_POST':
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
      if (state.profile){
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos }
      }} else return state;
    default:
      return state;
  }
}
 

//ACTION_CREATORS
export const addPost = (postText: string): AddPostType => ({ type: ADD_POST, postText });
type AddPostType = { type: typeof ADD_POST, postText: string };

const setProfile = (profile: GetProfileType): SetProfileType => ({ type: SETPROFILE, profile });
type SetProfileType = { type: typeof SETPROFILE, profile: GetProfileType };

const setStatus = (status: string): SetStatusType => ({ type: SETSTATUS, status });
type SetStatusType = { type: typeof SETSTATUS, status: string };

const updateUserPhoto = (photos: PhotosType): UpdPhotoType => ({ type: UPDATEUSERPHOTO, photos });
type UpdPhotoType = { type: typeof UPDATEUSERPHOTO, photos: PhotosType };

type ActionsType = 
|AddPostType
|SetProfileType
|SetStatusType
|UpdPhotoType

//THUNK_CREATORS
export const getUserProfile = (userId: number) => (dispatch: AppDispatch) => {
  usersAPI.getUserProfile(userId)
    .then(data =>
      dispatch(setProfile(data)))
}

export const getStatus = (userId: number) => (dispatch: AppDispatch) => {
  profileAPI.getStatus(userId)
    .then(data => {
      dispatch(setStatus(data))
    })
}

export const changeStatus = (status: string) => (dispatch: AppDispatch) => {
  profileAPI.setStatus(status)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
}

export const savePhoto = (photo: string) => (dispatch: AppDispatch) => {
  profileAPI.savePhoto(photo)
    .then(response => {
      if (response.data.resultCode === 0) {
        dispatch(updateUserPhoto(response.data.data.photos))
      }
    })
}

export default profileReducer;