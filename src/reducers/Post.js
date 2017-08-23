

const INITIAL_STATE = {
    postsList: {posts: [], error:null, loading: false},
    newPost:{post:null, error: null, loading: false},
}

const posts = (state = INITIAL_STATE, action) => {
  let error
  switch (action.type) {
    case 'FETCH_POSTS':
        return {
            ...state,
            postsList: {
                posts:[], error:null, loading: true
            }
        }
    case 'FETCH_POSTS_SUCCESS':
        return {
            ...state,
            postsList: {
                posts: action.payload, error: null, loading: false
            }
        }
    case 'FETCH_POSTS_FAILURE':
        error = action.payload || {message: action.payload.message};
        return {
            ...state,
            postsList: {
                posts:[], error: error, loading:false
            }
        }
    case 'CREATE_POST':
        return {
            ...state,
            newPost: {
                ...state.newPost,
                loading: true
            }
        }
    case 'CREATE_POST_SUCCESS':
        return {
            ...state,
            newPost: {
                post:action.payload, erro: null, loading:false
            }
        }
    case 'CREATE_POST_FAILURE':
        error = action.payload || {message: action.payload.message}

        return {
            ...state,
            newPost: {
                post: null,
                error: error,
                loading: false
            }
        }
    default:
      return state;
  }
};

export default posts;
