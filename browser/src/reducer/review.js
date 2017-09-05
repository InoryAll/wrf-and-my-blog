/**
 * review reducer
 */
import {ADD_REVIEW, GET_REVIEWS_BY_ID} from "../action/action";

export default function review(state={},action) {
    switch (action.type){
        case GET_REVIEWS_BY_ID:
            return Object.assign({},state,{reviews:action.reviews});
        case ADD_REVIEW:
            return Object.assign({},state,{review:action.review});
        default:
            return state;
    }
}