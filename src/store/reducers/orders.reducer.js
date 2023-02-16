import { orderTypes } from '../types';

const { GET_ORDERS, GET_ORDERS_SUCCESS, GET_ORDERS_FAILURE, DELETE_ORDER } = orderTypes;

const initialState = {
  loading: false,
  list: [],
  error: null,
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.orders,
      };
    case GET_ORDERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case DELETE_ORDER:
      return {
        ...state,
        list: state.list.filter((order) => order.id !== action.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
