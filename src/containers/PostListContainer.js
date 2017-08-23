import { connect } from 'react-redux';
import {fetchPosts, fetchPostsSuccess, fetchPostsFailure } from '../actions';

import PostList from '../components/PostList';

const mapStateToProps = (state) => {
  return {
    posts: state.posts.postsList
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: () => {
      dispatch(fetchPosts())
      .then((response) => {
            !response.error ? dispatch(fetchPostsSuccess(response.payload.data)) : dispatch(fetchPostsFailure(response.payload.data));
          });
    }
  }
}

const PostListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);

export default PostListContainer;
