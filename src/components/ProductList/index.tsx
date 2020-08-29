import React from 'react';
import { List, Product } from './ProductList.style';

type Props = {
    products: { title: string; image: string }[];
};

const ProductList: React.FC<Props> =({ products }: Props) => {
  return (
    <List>
      {products.map(product => {
        return (
          <Product>
            <picture className= "picture">
              <img src={product.image} alt={product.title}/>
            </picture>
            <div className ="title">
              <h3>{product.title}</h3>
              <h4>
                3 un
                {/*product.quantity*/}
              </h4>
            </div>
            <div>
                
            </div>
          </Product>
        );
      })}
    </List>
  );
};
export default ProductList;