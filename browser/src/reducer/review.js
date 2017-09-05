/**
 * review reducer
 */
import {GET_REVIEWS} from "../action/action";

export default function review(state={},action) {
    switch (action.type){
        case GET_REVIEWS:
            return Object.assign({},state,{reviews:action.reviews});
        default:
            return state;
    }
}