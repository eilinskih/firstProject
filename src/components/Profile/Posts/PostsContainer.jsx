import React from 'react';
import { updateNewTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer';
import Posts from './Posts'
 
function PostsContainer(props) {

  let onAddPost = () => {
props.dispatch(addPostActionCreator());
  }
    
  let onPostChange = (text) => {
    props.dispatch(updateNewTextActionCreator(text));
    
  }
  
  return  (
      <Posts addNewPost={onAddPost} updateNewText={onPostChange} posts={props.posts} newPostText={props.newPostText}/>
  );
}

export default PostsContainer;