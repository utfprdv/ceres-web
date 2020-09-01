import React from 'react';
import { ReactComponent as IconBin } from 'images/bin.svg';
import { Grid, Product, RemoveListItem } from './ListGrid.style';

type Props = {
  products: { title: string; image: string; amount: string }[];
};

const ListGrid: React.FC<Props> = ({ products }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <Product key={product.title}>
            <picture>
              <img src={product.image} alt="" />
            </picture>
            <div className='nameProduct'>
            <h3>{product.title}</h3>
            </div>
            <div>
              <RemoveListItem>
                <IconBin />
              </RemoveListItem>
            </div>
          </Product>
        );
      })}
    </Grid>
  );
};

export default ListGrid;
