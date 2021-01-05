let initialState = {
  dialogsData: [
    { id: 1, name: 'Jeka' },
    { id: 2, name: 'Olya' },
    { id: 3, name: 'Taisiya' }
  ],

  messagesData: [
    { message: 'How are you?' }
  ],
  newMessageText: ""
};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND-MESSAGE':
      let message = state.newMessageText;
      return {
        ...state,
        messages: { message: message },
        newMessageText: ""
      }

    case 'UPDATE-MESSAGE':
      return {
        ...state,
        newMessageText: action.messageText
      }
    default:
      return state;
  }
}

export const sendMessageActionCreator = () => {
  return { type: 'SEND-MESSAGE' }
}

export const updateMessageActionCreator = (mesBody) => {
  return { type: 'UPDATE-MESSAGE', messageText: mesBody }
}

export default dialogsReducer;