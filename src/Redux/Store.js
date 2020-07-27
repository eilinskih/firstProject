import profileReducer from "./profileReducer"
import dialogsReducer from "./dialogsReducer"

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const updateNewTextActionCreator = (text) => {
  return { type: 'UPDATE-TEXT', 
  newText: text }
}

export const sendMessageActionCreator = () => {
return {type: 'SEND-MESSAGE'}
}

export const updateMessageActionCreator = (mesBody) => {
  return {type: 'UPDATE-MESSAGE', messageText: mesBody}
}

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
     {message: "привет ежжи"},
     {message: "держи краба"}
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
