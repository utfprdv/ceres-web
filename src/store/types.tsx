export interface Product {
  name: string,
  price: number,
}

export interface CartState {
  products: Product[],
  total: number
}

export type CartItem = Product & {totalPerItem: number};

export type Cart = {
  [key: string]: CartItem
}
