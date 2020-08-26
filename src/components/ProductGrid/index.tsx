import React from 'react';
import { Grid, Product } from './ProductGrid.style';

type Props = {
  products: { title: string; image: string }[];
};

const ProductGrid: React.FC<Props> = ({ products }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <Product>
            <picture>
              <img src={product.image} alt="" />
            </picture>
            <h3>{product.title}</h3>
            <h4>
              4 produtores
              {/* {product.producer.quantity} */}
            </h4>
          </Product>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
