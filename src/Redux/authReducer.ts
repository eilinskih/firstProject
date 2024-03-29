import { FormAction, stopSubmit } from "redux-form";
import { ThunkAction } from "redux-thunk";

import { authAPI } from "../api/api";
import { AppDispatch, StateType } from './redux-store';

const SETAUTHUSER = 'SETAUTHUSER';
const ISFETCHING = 'ISFETCHING';

export type InitialStateType = {
  id: null | number,
  login: null | string,
  email: null | string,
  isFetch: boolean,
  isAuth: boolean
};

let initialState = {
  id: null,
  login: null,
  email: null,
  isFetch: false,
  isAuth: false
};

const authReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {

  switch (action.type) {
    case 'SETAUTHUSER':
      return {
        ...state,
        ...action.data,
      }

    case 'ISFETCHING':
      return {
        ...state,
        isFetch: action.isFetching
      }

    default:
      return state;
  };
};

// ACTION_CREATORS
type ActionsType =
  | SetAuthProfileType
  | IsFetchingType

const setAuthProfile = (id: null | number, login: null | string, email: null | string, isAuth: boolean): SetAuthProfileType => {
  return { type: SETAUTHUSER, data: { id, login, email, isAuth } }
};
type SetAuthProfileType = { type: typeof SETAUTHUSER, data: { id: null | number, login: null | string, email: null | string, isAuth: boolean } };

const isFetching = (isFetching: boolean): IsFetchingType => ({ type: ISFETCHING, isFetching });
type IsFetchingType = { type: typeof ISFETCHING, isFetching: boolean };

//THUNK_CREATORS
export const authProfile = (): ThunkAction<Promise<void>, StateType, unknown, ActionsType> => async (dispatch) => { 
    await authAPI.me().then(data => {
      if (data.resultCode === 0) {
        let { id, login, email } = data.data
        dispatch(isFetching(true))
        dispatch(setAuthProfile(id, login, email, true))
        dispatch(isFetching(false)) 
      }
    })
};

export const authLogin = (email: string, password: string, rememberMe: boolean): ThunkAction<Promise<void>, StateType, unknown, ActionsType | FormAction> => async (dispatch) => {
  await authAPI.login(email, password, rememberMe).then(response => {
    if (response.resultCode === 0) {
      dispatch(authProfile())
    } else {
      dispatch(stopSubmit('login', { _error: response.messages[0] || "some error" }))
    }
  })
}

export const authLogOut = (): ThunkAction<Promise<void>, StateType, unknown, ActionsType> => async (dispatch) => {
  await authAPI.logout().then(data => {
    if (data.resultCode === 0) {
      dispatch(setAuthProfile(null, null, null, false))
    }
  })
  dispatch(authProfile())
}

export default authReducer;