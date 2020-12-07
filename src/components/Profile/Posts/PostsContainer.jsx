
import { connect } from 'react-redux';
import { updateNewTextActionCreator, addPostActionCreator } from '../../../Redux/profileReducer';
import Posts from './Posts'


let mapStateToProps = (state) => {
  return {
profilePage : state.profilePage
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addNewPost : () => {
      dispatch(addPostActionCreator())},
      updateNewText : (text) => {
        dispatch(updateNewTextActionCreator(text))
      }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;