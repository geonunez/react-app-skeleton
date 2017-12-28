import { userConstants } from '../actions';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      return {
        ...state
      }
    case userConstants.LOGOUT:
      return {
        ...state
      }
    default:
      return {
        ...state
      }
  }
}
