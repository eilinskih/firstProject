import React from 'react';
import p from './Posts.module.css';
import Post from './post/Post';
import { Field, reduxForm } from 'redux-form';
import { MaxLenght, Required } from '../../common/formValidators';
import { Textarea } from '../../common/FormControls/FormFields';

let maxLength = MaxLenght(30)
function PostForm(props) {
  return (
<form onSubmit={props.handleSubmit}>
        <Field type="text" component={Textarea} name="postText" validate={[Required, maxLength]} />
        <div className={p.button}><button>PUBLIC</button></div>
      </form>
  )
} 

let PostReduxForm = reduxForm({form: "post"})(PostForm)


function Posts(props) {
  let postsElements = props.profilePage.posts.map(post => <Post message={post.message} />);


 let onSubmit = (formData) => {
    props.addPost(formData.postText);
  }
  return (
    <div className={p.posts}>
      <p>My posts</p>
      <PostReduxForm onSubmit={onSubmit}/>
      { postsElements}
    </div>
  );
}

export default Posts;
