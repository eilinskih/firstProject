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
if (action.type === 'ADD-POST') {
  let newPost = {
    id: 4,
    message: this._state.profilePage.newPostText
  };
this._state.profilePage.posts.push(newPost);
this._state.profilePage.newPostText = '';
this.rerenderTree(this._state);
}
else if (action.type === 'UPDATE-TEXT') {
  this._state.profilePage.newPostText = action.newText;
  this.rerenderTree(this._state); 
}
else if (action.type === 'UPDATE-MMESSAGE') {
  this._state.messagesPage.newMessageText = action.messageText;
  this.rerenderTree(this._state)
}
else if (action.type === 'SEND-MESSAGE') {
  let message = this._state.messagesPage.newMessageText;
  this._state.messagesPage.newMessageText = '';
  this._state.messagesPage.messagesData.push({id: 6, message: message});
  this.rerenderTree(this._state);
}
},

   rerenderTree() {},

subscribe(observer) {
  this.rerenderTree = observer;
}
}


export default store;
