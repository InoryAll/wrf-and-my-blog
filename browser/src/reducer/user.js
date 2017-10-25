/**
 * user reducer
 */
import {GET_ALL_USERS, USER_DELETE, USER_UPDATE} from "../action/action";

export default function user(state={},action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state,users:action.users};
    case USER_UPDATE:
    case USER_DELETE:
    default:
      return state;
  }
}
