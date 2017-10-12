/**
 * user reducer
 */
import {GET_ALL_USERS} from "../action/action";

export default function user(state={},action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return {...state,users:action.users};
    default:
      return state;
  }
}
