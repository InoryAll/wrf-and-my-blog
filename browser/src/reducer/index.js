/**
 *index reducer
 */
import {combineReducers} from 'redux';
import comment from './comment';
import sider from './sider';

export const rooterReducer=combineReducers({
    comment,
    sider
});
