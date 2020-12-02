import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

let store = {
  _state: {
    messagesPage: {
  dialogsData: [
      {id: 1, name: 'Jeka'},
      {id: 2, name: 'Olya'},
      {id: 3, name: 'Taisiya'}
    ],
   
    messagesData: [
      {message: 'How are you?'}
    ],
    newMessageText: "" 
  },
   profilePage: {
   posts: [
     {message: "привет"},
     {message: ""}
   ],
   newPostText: 'kama Pulya'
  }
  },

  getState () {
return this._state;
  },

dispatch(action) {
  this._state.profilePage = profileReducer(this._state.profilePage, action);
  
  this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
this.rerenderTree(this._state)
},


   rerenderTree() {},

subscribe(observer) {
  this.rerenderTree = observer;
}
}


export default store;
