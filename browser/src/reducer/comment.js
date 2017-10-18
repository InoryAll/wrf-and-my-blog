/**
 * comment reducer
 */
import {
  ADD_COMMENT,
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  GET_COMMENT_BY_ID,
  UPDATE_COMMENT
} from "../action/action";

export default function comment(state={},action) {
    switch (action.type){
      case GET_ALL_COMMENTS:
          return Object.assign({},state,{comments:action.comments});
      case GET_COMMENT_BY_ID:
          return { ...state, comment: action.comment[0] };
      case ADD_COMMENT:
          return Object.assign({},state,{comment:action.comment});
      case UPDATE_COMMENT:
      case DELETE_COMMENT:
      default:
          return state;
    }
}