import React from 'react';
import { Grid } from './ProductGrid.style';

type Props = {
  products: { title: string; image: string }[];
};

const ProductGrid: React.FC<Props> = ({ products }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <article>
            <picture>
              {/* <img src={product.image} alt="" /> */}
            </picture>
            <h3>{product.title}</h3>
          </article>
        );
      })} 
    </Grid>
  )
};

export default ProductGrid;
