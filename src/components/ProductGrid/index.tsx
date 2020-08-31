import React from 'react';
import { Link } from 'react-router-dom';
import InputCheckbox from 'components/InputCheckbox';
import {
  Grid,
  Product,
  ProductCount,
  ProductDetails,
} from './ProductGrid.style';

type Props = {
  picker?: boolean;
  products: {
    title: string;
    image: string;
    id: number;
    slug: string;
  }[];
};

const ProductGrid: React.FC<Props> = ({ products, picker }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <Link
            key={product.id}
            style={{ color: 'inherit', textDecoration: 'inherit' }}
            to={`/produto/${product.slug}`}
          >
            <Product>
              <picture>
                <img src={product.image} alt={product.title} />
              </picture>
              <ProductDetails>
                <h3>{product.title}</h3>
                {picker ? (
                  <div
                    style={{
                      marginTop: 8,
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <InputCheckbox checked />
                    <span
                      style={{
                        fontSize: 12,
                        display: 'inline-block',
                        marginLeft: 8,
                      }}
                    >
                      Adicionar à lista
                    </span>
                  </div>
                ) : (
                  <ProductCount>4 produtores</ProductCount>
                )}
              </ProductDetails>
            </Product>
          </Link>
        );
      })}
    </Grid>
  );
};

export default ProductGrid;
