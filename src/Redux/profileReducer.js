const profileReducer = (state, action) => {

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
export default profileReducer;