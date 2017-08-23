import { connect } from 'react-redux';
import {createPost, createPostsSuccess, createPostsFailure } from '../actions';

import PostForm from '../components/PostForm';

const mapStateToProps = (state) => {
  return {
    newPost: state.posts.newPost
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    createx: (title, categories, content) => {
      dispatch(createPost(title, categories, content))
      .then((response) => {
            !response.error ? dispatch(createPostsSuccess(response.payload.data)) : dispatch(createPostsFailure(response.payload.data));
          });
    }
  }
}

const PostFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostForm);

export default PostFormContainer;
