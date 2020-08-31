import React from 'react';
import { useParams } from 'react-router-dom';
import { Producers } from 'components';
import { ProductFigure, ProductTitle } from './Product.style';

const products = [
  {
    image: 'https://lorempixel.com/170/130/food/',
    title: 'Pão caseiro',
    slug: 'pao-caseiro',
    id: 1,
    producers: [
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
    ],
  },
  {
    image: 'https://lorempixel.com/170/150/food/',
    title: 'Acelga',
    slug: 'acelga',
    id: 2,
    producers: [
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
    ],
  },
  {
    image: 'https://lorempixel.com/170/190/food/',
    title: 'Mamão',
    slug: 'mamao',
    id: 3,
    producers: [
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
    ],
  },
  {
    image: 'https://lorempixel.com/170/120/food/',
    title: 'Abacate',
    slug: 'abacate',
    id: 4,
    producers: [
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
    ],
  },
  {
    image: 'https://lorempixel.com/170/160/food/',
    title: 'Cenoura',
    slug: 'cenoura',
    id: 5,
    producers: [
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
      {
        id: 1,
        title: 'Horta da Alice',
        slug: 'horta-da-alice',
        phone: '(46) 98773-1344',
      },
    ],
  },
];

const Product: React.FC = () => {
  const { productID } = useParams();
  const [product] = products.filter(p => p.slug === productID);

  return (
    <>
      <ProductFigure>
        <img src={product.image} alt={product.title} />
      </ProductFigure>
      <ProductTitle>{product.title}</ProductTitle>
      <Producers data={product.producers} />
    </>
  );
};

export default Product;
