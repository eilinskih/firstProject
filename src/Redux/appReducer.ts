import { ThunkAction } from "redux-thunk";

import { authProfile } from "./authReducer";
import { StateType } from "./redux-store";

const INITIALIZE = 'INITIALIZE';

const initialState = {
  isInitialized: false
};

export type AuthStateType = typeof initialState;

const authReducer = (state: AuthStateType = initialState, action: SetInitializeType): AuthStateType => {

  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state;
  };
};

// ACTION_CREATORS
export const setInitialize = (): SetInitializeType => {
  return { type: INITIALIZE }
};

type SetInitializeType = {type: typeof INITIALIZE};

//THUNK_CREATORS
export const initialize = (): ThunkAction<Promise<void>, StateType, unknown, SetInitializeType> => async (dispatch) => {
  const promise = dispatch(authProfile())
  await Promise.all([promise])
    .then(() => dispatch(setInitialize()))
};

export default authReducer;