

import axios from 'axios'
const ROOT_URL = 'http://localhost:4000/api'

//Post list

export const fetchPosts = () => {

  const request = axios.get(`${ROOT_URL}/posts`);
    return {
       type: 'FETCH_POSTS',
       payload: request
    };
}

export const fetchPostsSuccess = (posts) => {
  return {
    type: 'FETCH_POSTS_SUCCESS',
    payload: posts
  };
}

export const fetchPostsFailure = (error) => {
  return {
    type: 'FETCH_POSTS_FAILURE',
    payload: error
  };
}


export const createPost = (title, categories, content) => {
    const request = axios.post(`${ROOT_URL}/posts`, {title, categories, content});
    return {
        type: 'CREATE_POST',
        payload: request
    }
}

export const createPostsSuccess = (post) => {
    return {
        type: 'CREATE_POST_SUCCESS',
        payload: post
    }
}
export const createPostsFailure = (error) => {
    return {
        type: 'CREATE_POST_FAILURE',
        payload: error
    }
}
