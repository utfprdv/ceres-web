import React from 'react';
import { ProductGrid } from 'components';
import { H2 } from './Producer.style';

const products = [
  {
    image: 'https://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    slug: 'pao-caseiro',
    id: 1,
    produtores: [{}, {}],
  },
  {
    image: 'https://lorempixel.com/170/150/food/',
    title: 'Acelga',
    slug: 'acelga',
    id: 2,
    produtores: [{}, {}],
  },
  {
    image: 'https://lorempixel.com/170/190/food/',
    title: 'Mamão',
    slug: 'mamao',
    id: 3,
    produtores: [{}, {}],
  },
  {
    image: 'https://lorempixel.com/170/120/food/',
    title: 'Abacate',
    slug: 'abacate',
    id: 4,
    produtores: [{}, {}],
  },
  {
    image: 'https://lorempixel.com/170/160/food/',
    title: 'Cenoura',
    slug: 'cenoura',
    id: 5,
    produtores: [{}, {}],
  },
];

const Producer: React.FC = () => {
  return (
    <>
      <H2>Pães Caseiros Dois Vizinhos</H2>
      <p>
        Produtos disponíveis para retirada dia
        <strong> 14 de setembro </strong>
        na feira de
        <strong> Dois Vizinhos</strong>
      </p>
      <br />
      <ProductGrid products={products} picker />
    </>
  );
};

export default Producer;
