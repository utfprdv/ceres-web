import * as constants from './contants';
import {Product} from './types';

export interface AddProduct{
  type: constants.ADD_PRODUCT,
  product: Product
}

export interface RemoveProduct{
  type: constants.REMOVE_PRODUCT,
  product: Product
}

export type CartAction = AddProduct | RemoveProduct;

export function addProduct(product: Product):AddProduct{
  return {
    type: constants.ADD_PRODUCT,
    product: product
  }
}

export function removeProduct(product: Product):RemoveProduct{
  return {
    type: constants.REMOVE_PRODUCT,
    product: product
  }
}
