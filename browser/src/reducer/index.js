/**
 *index reducer
 */
import {combineReducers} from 'redux';
import comment from './comment';
import sider from './sider';
import review from './review';
import login from './login';

export const rooterReducer=combineReducers({
    comment,
    sider,
    review,
    login
});
