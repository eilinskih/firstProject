let initialState = {
  dialogsData: [
    { id: 1, name: 'Jeka' },
    { id: 2, name: 'Olya' }, 
    { id: 3, name: 'Taisiya' }
  ],

  messagesData: [
    { message: 'How are you?' }
  ],

};
const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SEND-MESSAGE':
      return {
        ...state,
        messagesData: [...state.messagesData, {message: action.message }]
      }

    default:
      return state;
  }
}

export const sendMessage = (message) => {
  return { type: 'SEND-MESSAGE', message }
}


export default dialogsReducer;