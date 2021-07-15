
import { connect } from 'react-redux';
import { addPost } from '../../../Redux/profileReducer';
import Posts from './Posts'


let mapStateToProps = (state) => {
  return {
    profilePage: state.profilePage
  };
};


const PostsContainer = connect(mapStateToProps, {
  addPost
})(Posts);

export default PostsContainer;