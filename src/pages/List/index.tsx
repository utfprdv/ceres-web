import React from 'react';
import ListGrid from 'components/ListGrid';
import { H3 } from './List.style';

const products = [
  {
    image: 'https://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    amount: '3',
  },
  {
    image: 'https://lorempixel.com/170/190/food/',
    title: 'Mamão',
    amount: '1',
  },
  {
    image: 'https://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  },
];

const List: React.FC = () => {
  return (
    <>
      <H3>Lista</H3>
      <ListGrid products={products} />
    </>
  );
};

export default List;
