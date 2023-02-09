import { createStore, combineReducers } from 'redux';

import { categoryReducer, productReducer } from './reducers';

const rootReducer = combineReducers({
  products: productReducer,
  category: categoryReducer,
});

export default createStore(rootReducer);
