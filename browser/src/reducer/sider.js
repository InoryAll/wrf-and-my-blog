/**
 * sider reducer
 */
import {GET_SIDER} from "../action/action";

export default function sider(state={},action) {
    switch (action.type){
        case GET_SIDER:
            return Object.assign({},state,{ siders:action.siders });
        default:
            return state;
    }
}