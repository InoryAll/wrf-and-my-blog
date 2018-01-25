/**
 * board reducer
 */
import { BOARD_ADD, BOARD_SEARCH } from "../action/action";

export default function board(state = {}, action) {
  switch (action.type) {
    case BOARD_SEARCH:
      return {boards: action.boards};
    case BOARD_ADD:
    default:
      return state;
  }
}