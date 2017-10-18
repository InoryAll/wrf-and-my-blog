/**
 * comment reducer
 */
import {ADD_COMMENT, GET_ALL_COMMENTS, GET_COMMENT_BY_ID} from "../action/action";

export default function comment(state={},action) {
    switch (action.type){
        case GET_ALL_COMMENTS:
            return Object.assign({},state,{comments:action.comments});
        case GET_COMMENT_BY_ID:
            return { ...state, comment: action.comment[0] };
        case ADD_COMMENT:
            return Object.assign({},state,{comment:action.comment});
        default:
            return state;
    }
}