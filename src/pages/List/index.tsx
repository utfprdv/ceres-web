import React from 'react';
import { H2 } from '../Home/Home.styles';
import ProductList from 'components/ProductList';
import { ListaCount } from 'pages/Layout/Header.style';

const products = [ 
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Broa de milho',
    unidades: [{}, {}],
  },

  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    unidades: [{}, {}],
  }, 
  
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Bolo',
    unidades: [{}, {}],
  },

  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Torta',
    unidades: [{}, {}],
  },
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    unidades: [{}, {}],
  }, 
  
  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Bolo',
    unidades: [{}, {}],
  },

  {
    image: 'http://lorempixel.com/170/130/food/',
    title: 'Torta',
    unidades: [{}, {}],
  },
]
const List: React.FC = () => {
  return (
    <>
    <H2>Lista</H2>
    <ListaCount>12</ListaCount>
    <ProductList products={products} />
  </>
  );
};

export default List;
