import { authProfile } from "./authReducer"
import { AppDispatch } from "./redux-store"

const INITIALIZE = 'INITIALIZE'

const initialState = {
  isInitialized: false
}

type AuthStateType = typeof initialState

const authReducer = (state: AuthStateType = initialState, action: SetInitializeType): AuthStateType => {

  switch (action.type) {
    case 'INITIALIZE':
      return {
        ...state,
        isInitialized: true
      }
    default:
      return state;
  }
}

// ACTION_CREATORS
const setInitialize = (): SetInitializeType => {
  return { type: INITIALIZE }
}

type SetInitializeType = {type: typeof INITIALIZE}

//THUNK_CREATORS
export const initialize = () => (dispatch: AppDispatch) => {
  let promise = dispatch(authProfile())
  Promise.all([promise])
    .then(() => dispatch(setInitialize()))
}

export default authReducer;