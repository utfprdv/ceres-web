import React from 'react';
import { Link } from 'react-router-dom';
import { Grid, Product } from './ProductGrid.style';

type Props = {
  products: { title: string; image: string }[];
};

const ProductGrid: React.FC<Props> = ({ products }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <Link
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/produto/${product.title}`}
          >
            <Product>
              <picture>
                <img src={product.image} alt={product.title} />
              </picture>
              <h3>{product.title}</h3>
              <h4>
                4 produtores
                {/* {product.producer.quantity} */}
              </h4>
            </Product>
          </Link>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
