import { authProfile } from "./authReducer"

let initialState = {
     isInitialized: false
}

const authReducer = (state = initialState, action) => {

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
const setInitialize = () => {
  return { type: 'INITIALIZE' }
}

//THUNK_CREATORS

export const initialize = () => (dispatch) => {
let promise = dispatch(authProfile())
Promise.all([promise])
.then(() => dispatch(setInitialize()))
}


export default authReducer;