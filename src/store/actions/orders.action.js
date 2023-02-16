import { REALTIME_DATABASE_URL } from '../../constants/firebase';
import { orderTypes } from '../types';

const { GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, DELETE_ORDER } = orderTypes;

export const getOrders = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: GET_ORDERS,
      });
      const response = await fetch(`${REALTIME_DATABASE_URL}/orders.json`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      const orders = Object.keys(result).map((key) => ({
        ...result[key],
        id: key,
      }));
      dispatch({
        type: GET_ORDERS_SUCCESS,
        orders,
      });
    } catch (error) {
      dispatch({
        type: GET_ORDERS_FAILURE,
        error,
      });
    }
  };
};

export const deleteOrder = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${REALTIME_DATABASE_URL}/orders/${id}.json`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const result = await response.json();

      dispatch({
        type: DELETE_ORDER,
        id,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ORDER,
        error,
      });
    }
  };
};
