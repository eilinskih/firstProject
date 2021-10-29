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

const SEND_MESSAGE = 'SEND_MESSAGE'

export type DialogsStateType = typeof initialState

const dialogsReducer = (state: DialogsStateType = initialState, action: SendMessageType): DialogsStateType => {
  switch (action.type) {
    case 'SEND_MESSAGE':
      return {
        ...state,
        messagesData: [...state.messagesData, { message: action.message }]
      }

    default:
      return state;
  }
}

export const sendMessage = (message: string) => {
  return { type: SEND_MESSAGE, message }
}

type SendMessageType = { type: typeof SEND_MESSAGE, message: string}


export default dialogsReducer;