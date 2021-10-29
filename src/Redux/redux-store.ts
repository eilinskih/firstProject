import usersReducer from "./usersReducer";
import { createStore, combineReducers, applyMiddleware } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import authReducer from "./authReducer";
import appReducer from "./appReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form"


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app: appReducer,
    form: formReducer
});
const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export const createTestStore = () => {
    const store = createStore(reducers)
    return store
};
export type StoreType = typeof store;
type RootReducerType = typeof reducers;
export type StateType = ReturnType<RootReducerType>;
export type AppDispatch = typeof store.dispatch;
export type FormDataType = typeof formReducer;

export default store;
