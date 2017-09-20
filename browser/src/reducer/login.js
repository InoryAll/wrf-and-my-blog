/**
 * login reducer
 */
import {LOGIN_USER} from "../action/action";

export default function login(state={},action) {
  switch (action.type){
    case LOGIN_USER:
      return {...state,...action.user};
    default:
      return state;
  }
}