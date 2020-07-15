import React from 'react';
import p from './Posts.module.css';
import Post from './post/Post';
import { updateNewTextActionCreator, addPostActionCreator } from '../../../Redux/State';


function Posts(props) {

  let newPostElement = React.createRef()

  let addPost = () => {
props.dispatch(addPostActionCreator());
//props.dispatch({ type: 'UPDATE-TEXT' }) = ('');
  }

  let postsElements = props.posts.map( post => <Post message={post.message} />);
    
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(updateNewTextActionCreator(text));
    
  }
  
  return  (
        <div className={p.posts}>
      <p>My posts</p>
      <form>
        <textarea type="text" onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
        <div className={p.button}><input type="button" value="PUBLIC" onClick={addPost}></input></div>
      </form>
    { postsElements }
    </div>
    );
}

export default Posts;
