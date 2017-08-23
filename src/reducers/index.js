import { combineReducers } from 'redux';
import posts from './Post.js'
const BlogApp = combineReducers({
    posts
});

export default BlogApp;
