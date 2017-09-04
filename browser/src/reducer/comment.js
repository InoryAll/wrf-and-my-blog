/**
 * comment reducer
 */
import {GET_ALL_COMMENTS} from "../action/action";

export default function comment(state={},action) {
    switch (action.type){
        case GET_ALL_COMMENTS:
            return Object.assign({},state,{comments:action.comments});
        default:
            return state;
    }
}