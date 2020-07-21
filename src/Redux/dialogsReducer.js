const dialogsReducer = (state, action) => {
    
      switch(action.type) {
      case 'UPDATE-MMESSAGE': 
        state.newMessageText = action.messageText;
      return state;
      case 'SEND-MESSAGE': 
        let message = state.newMessageText;
        state.newMessageText = '';
        state.messagesData.push({id: 6, message: message});
        return state;
      }
}

export default dialogsReducer;