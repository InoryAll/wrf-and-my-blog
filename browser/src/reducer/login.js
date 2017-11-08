/**
 * login reducer
 */
import { LOGIN_USER } from "../action/action";
import { getCookie } from "../util/cookieUtil";

const initState = {
  username: getCookie('username'),
  password: getCookie('password'),
};

export default function login(state=initState,action) {
  switch (action.type){
    case LOGIN_USER:
      return {
        username: getCookie('username'),
        password: getCookie('password'),
      };
    default:
      return state;
  }
}