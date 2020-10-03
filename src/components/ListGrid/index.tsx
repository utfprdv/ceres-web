import React from 'react';
import { ReactComponent as IconBin } from 'images/bin.svg';
import { Grid, Product, RemoveListItem } from './ListGrid.style';

type Props = {
  products: { id: number, nome: string; imagem_principal: string; }[];
  onRemove: (prodID: number) => void
};

const ListGrid: React.FC<Props> = ({ products, onRemove }: Props) => {
  return (
    <Grid>
      {products.map(product => {
        return (
          <Product key={product.nome}>
            <picture>
              <img src={`https://ceres.app.br/media/${product.imagem_principal}`} alt={product.nome} />
            </picture>
            <div className='nameProduct'>
              <h3>{product.nome}</h3>
            </div>
            <div>
              <RemoveListItem onClick={() => onRemove(product.id)}>
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
