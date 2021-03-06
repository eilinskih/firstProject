import usersReducer from "./usersReducer";
import { createStore, combineReducers } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from"./dialogsReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer
});
let store = createStore(reducers);

export default store;
