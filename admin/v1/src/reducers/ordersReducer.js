import initialState from './initialState';
import {FETCH_ORDERS, RECEIVE_ORDERS, UPDATE_STATUS} from '../actions/actionTypes';

export default function orders(state = initialState.orders, action) {
  let newState;
  switch (action.type) {
    case FETCH_ORDERS:
      console.log('FETCH_ORDERS Action')
      return action;
    case RECEIVE_ORDERS:
      newState = action.orders;
      console.log(newState);
      console.log('RECEIVE_ORDERS Action')
      return newState;
    case UPDATE_STATUS:
      newState = state;
      newState[action.index].status = action.status;
      return newState;
    default:
      return state;
  }
}