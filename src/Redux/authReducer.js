import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"

let initialState = {
 id: null, 
 login: null,
 email: null,
 isFetch: false,
 isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'SETAUTHUSER':
      return {
        ...state,
        ...action.data,
      }

      case 'ISFETCHING' :
        return {
          ...state,
          isFetch: action.isFetching
        }

 
    default:
      return state;
  }
}
// ACTION_CREATORS
const setAuthProfile = (id, login, email, isAuth) => {
  return { type: 'SETAUTHUSER', data: {id, login, email, isAuth} }
}

const isFetching = (isFetching) => ({type: 'ISFETCHING', isFetching})

//THUNK_CREATORS

export const authProfile = () => (dispatch) => {
  return (
authAPI.me().then(data => {
  if (data.resultCode === 0) {
    let {id, login, email} = data.data
dispatch(isFetching(true))
dispatch(setAuthProfile(id, login, email, true))
dispatch(isFetching(false))
  }
}))
}

export const authLogin = (email, password, rememberMe) => (dispatch) => {
  authAPI.login(email, password, rememberMe).then(response => {
    if (response.data.resultCode === 0) {
      dispatch(authProfile())
    } else {
      dispatch(stopSubmit('login', {_error: response.data.messages[0] || "some error"}))
    }
  })
}

export const authLogOut = () => (dispatch) => {
  authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthProfile(null, null, null, false))
    }
  })
  dispatch(authProfile())
}

export default authReducer;