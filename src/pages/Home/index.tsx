import React from 'react';
import { InputSearch } from 'components';
import ProductGrid from 'components/ProductGrid';
import { H2 } from './Home.styles';

const products = [
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    produtores: [{}, {}],
  },
  {
    image: 'http://lorempixel.com/170/150/food/',
    title: 'Acelga',
    produtores: [{}, {}],
  },
  {
    image: 'http://lorempixel.com/170/190/food/',
    title: 'Mamão',
    produtores: [{}, {}],
  },
  {
    image: 'http://lorempixel.com/170/120/food/',
    title: 'Acelga',
    produtores: [{}, {}],
  },
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Mamão',
    produtores: [{}, {}],
  },
];

const Home: React.FC = () => {
  return (
    <>
      <H2>feira online</H2>
      <p>
        Selecione seus produtos orgânicos e retire nas feiras de quarta e sexta
      </p>
      <br />
      <InputSearch placeholder="Buscar por produtos" />
      <ProductGrid products={products} />
    </>
  );
};

export default Home;
