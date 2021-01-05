let initialState = {
  posts: [
    { message: "привет ежжи" },
    { message: "держи краба" }
  ],
  newPostText: 'kama Pulya'
}

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case 'ADD-POST':
      let newPost = {
        id: 4,
        message: state.newPostText
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: ''
      }

    case 'UPDATE-TEXT':
      return {
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const updateNewTextActionCreator = (text) => {
  return {
    type: 'UPDATE-TEXT',
    newText: text
  }
}

export default profileReducer;