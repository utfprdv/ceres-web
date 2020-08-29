import React from 'react';
import ProductGrid from 'components/ListGrid';
import { H3, BOT } from './List.style';

const products = [
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    amount: '3',
  },
  {
    image: 'http://lorempixel.com/170/190/food/',
    title: 'Mamão',
    amount: '1',
  },
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
  {
    image: 'http://lorempixel.com/170/160/food/',
    title: 'Pêssego',
    amount: '12',
  }, 
];


const List: React.FC = () => {
  return (
    <>    
      <H3>Lista</H3>
      <ProductGrid products={products} />
      <BOT>Reservar Produtos</BOT>
    </>
    )
};

export default List;
