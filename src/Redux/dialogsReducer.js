const dialogsReducer = (state, action) => {
    
      switch(action.type) {
      case 'SEND-MESSAGE': 
        let message = state.newMessageText;
        state.messagesData.push({message: message});
        return state;
        case 'UPDATE-MMESSAGE': 
        state.newMessageText = action.messageText;
      return state;
        default:
        return state;
      }
}

export default dialogsReducer;