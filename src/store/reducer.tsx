import {CartState} from './types';
import {CartAction} from './actions';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './contants';

const initialState:CartState = {
  products: [],
  total: 0
}

export function shop(state:CartState = initialState, action:CartAction) : CartState{
  const { products } = state;
  const { product, type } = action;

  switch(type){
    case ADD_PRODUCT:
      const newProducts = products.concat([product]);
      const newTotal = newProducts.reduce((total, item)=>total+item.price, 0);
      return {
        ...state,
        products: newProducts,
        total: newTotal
      };
    case REMOVE_PRODUCT:
      const firstProduct = products.find(searchProduct=>searchProduct.name===product.name);
      const filteredProducts = products.filter(item=> item !== firstProduct);
      const newFilteredTotal = filteredProducts.reduce((total, item)=>total+item.price, 0);
      return{
        ...state,
        products: filteredProducts,
        total: newFilteredTotal
      }
  }
}
