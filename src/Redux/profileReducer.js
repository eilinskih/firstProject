let initialState = {
  posts: [
    {message: "привет ежжи"},
    {message: "держи краба"}
  ],
  newPostText: 'kama Pulya'
 }

const profileReducer = (state = initialState, action) => {

   switch(action.type) {
   case 'ADD-POST':
        let newPost = {
          id: 4,
          message: state.newPostText
        };
      state.posts.push(newPost);
      state.newPostText = '';
      return state;
      
      case 'UPDATE-TEXT':
        state.newPostText = action.newText; 
    return state;
    default:
      return state;
}
}

export const addPostActionCreator = () => {
  return { type: 'ADD-POST' }
}

export const updateNewTextActionCreator = (text) => {
  return { type: 'UPDATE-TEXT', 
  newText: text }
}

export default profileReducer;