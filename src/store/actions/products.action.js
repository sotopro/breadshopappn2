import { productsTypes } from '../types';

const { SELECT_PRODUCT, FILTER_PRODUCTS } = productsTypes;

export const selectProduct = (id) => ({
  type: SELECT_PRODUCT,
  productId: id,
});

export const filterProducts = (id) => ({
  type: FILTER_PRODUCTS,
  categoryId: id,
});
