import {combineReducers} from 'redux';
import posts from './posts';
export default combineReducers ( {
    posts  // since key and value are the same value just do posts and not posts: posts
})