import React, { useState } from 'react';
import { InputSearch, MarketSummary, ProductGrid, LoadingGrid } from 'components';
import { H2 } from './Home.styles';

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

let data = true;

const Home: React.FC = () => {
  const [filterValue, setFilterValue] = useState('');

  const onFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value) {
      setFilterValue(e.target.value);
    }
  };

  if(!data){
    return (
      <>
      <H2>feira online</H2>
      <p>
        Selecione seus produtos orgânicos e retire nas feiras de quarta e sexta
      </p>
      <br />
      <InputSearch
        placeholder="Buscar por produtos"
        onChange={onFilterChange}
        />
      <MarketSummary />
      <LoadingGrid products={products}/>
      <ProductGrid products={products} />
    </>
  );
} else {
    return (
      <>
      <H2>feira online</H2>
      <p>
        Selecione seus produtos orgânicos e retire nas feiras de quarta e sexta
      </p>
      <br />
      <InputSearch
        placeholder="Buscar por produtos"
        onChange={onFilterChange}
        />
      <MarketSummary />
      <ProductGrid products={products} />
    </>
  );
}
};

export default Home;
 