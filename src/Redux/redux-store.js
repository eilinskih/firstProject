const { createStore, combineReducers } = require("redux");
const { default: profileReducer } = require("./profileReducer");
const { default: dialogsReducer } = require("./dialogsReducer");

let reducers = combineReducers({
profilePage: profileReducer,
dialogsPage: dialogsReducer
});
let store = createStore(reducers);

export default store;
