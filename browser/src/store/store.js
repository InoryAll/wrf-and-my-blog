/**
 * store
 */

import thunk from 'redux-thunk';
import {applyMiddleware,createStore,compose} from 'redux';
import {rooterReducer} from "../reducer/index";
import { composeWithDevTools } from 'redux-devtools-extension';
import invariant from 'redux-immutable-state-invariant';
import * as actionCreators from '../action/action';

const composeEnhancers = composeWithDevTools({ actionCreators });
const store = createStore(rooterReducer, composeEnhancers(
    applyMiddleware(invariant(), thunk)
));
export default store;