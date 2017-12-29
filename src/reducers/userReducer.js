import { userConstants } from '../actions';

const initialState = {};

export default function user(state = initialState, action) {
  switch (action.type) {
    case userConstants.LOGIN:
      let { user } = action;
      return {
        ...state,
        ...user

      }
    case userConstants.LOGOUT:
      return {
        ...initialState
      }
    default:
      return {
        ...state
      }
  }
}
