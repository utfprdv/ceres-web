import React from 'react';
import { Grid, Product } from './ListGrid.style';

type Props = {
    products: { title: string,
    image: string;
    amount: string;
    }[];
};

const ListGrid: React.FC<Props> = ({ products }: Props) => {
    return (
        <Grid>
            {products.map( product => {
                return (
                    <Product>
                        <picture>
                            <img
                            src={product.image}
                            alt=""
                            />
                        </picture>

                        <h3>
                            {product.title}
                            <h4>
                             {product.amount}
                             {' '}
                              un
                            </h4>
                        </h3>
                            <h5></h5>
                            <h6></h6>

                    </Product>
                );
            })}
        </Grid>
    );
};

export default ListGrid;