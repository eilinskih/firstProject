import React from 'react';
import p from './Posts.module.css';
import Post from './post/Post';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { MaxLenght, Required } from '../../common/formValidators';
import { Textarea } from '../../common/FormControls/FormFields';
import { useDispatch } from 'react-redux';
import { addPost, ProfileStateType } from '../../../Redux/profileReducer';

const maxLength = MaxLenght(30);
const PostForm: React.FC<InjectedFormProps<PostsFormDataType>> = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <Field type="text" component={Textarea} name="postText" validate={[Required, maxLength]} />
      <div className={p.button}><button>PUBLIC</button></div>
    </form>
  )
};

let PostReduxForm = reduxForm<PostsFormDataType>({ form: "post" })(PostForm);

type PostsPropsType = {
  profilePage: ProfileStateType
};

type PostsFormDataType = {
  postText: string
};

const Posts: React.FC<PostsPropsType> = (props) => {
  const dispatch = useDispatch();
  const postsElements = props.profilePage.posts.map(post => <Post key={post.id} message={post.message} ava={(props.profilePage.profile?.photos.small as string)} />);

  const onSubmit = (formData: PostsFormDataType) => {
    dispatch(addPost(formData.postText));
    formData.postText = "";
  };

  return (
    <div className={p.posts}>
      <p>My posts</p>
      <PostReduxForm onSubmit={onSubmit} />
      { postsElements}
    </div>
  );
};

export default Posts;
