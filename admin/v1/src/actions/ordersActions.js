import * as types from './actionTypes';
import axios from 'axios';

const BASE_URL = 'https://aasnackapi-gse00014261.uscom-east-1.oraclecloud.com/api/';

export const receiveOrders = (orders) => {
  return {type: types.RECEIVE_ORDERS, orders: orders};
}

export const fetchOrders = () => {
  return dispatch => {
    return axios.get(BASE_URL+'GetOrders')
      .then(res => dispatch(receiveOrders(res.data)));
  };
}

export const updateStatus = (index, newStatus) => {
  return {type: types.UPDATE_STATUS, index: index, status: newStatus}
}