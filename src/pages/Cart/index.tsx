import React from 'react';

import {
  Header,
  Body,
  DeliveryInfo,
  Change,
  MiscInfo,
  ProductImage,
  ProductDetais,
  QuantityAndValues,
  Total,
  Paragraph,
} from './style';
import { ReactComponent as DeliveryMan } from '../../images/delivery-man.svg';

const Cart: React.FC = () => {
  return (
    <>
      <Header>
        <DeliveryMan />
        <DeliveryInfo>
          <Paragraph>delivery para casa da mãe</Paragraph>
          <h2>entrega quarta</h2>
        </DeliveryInfo>
        <Change>troque</Change>
      </Header>
      <Body>
        <MiscInfo>
          <Paragraph>feira muito braba dois vizinhos</Paragraph>
          <div>a pagar</div>
        </MiscInfo>
        <div>
          <ProductImage />
          <ProductDetais>
            <h1>Pão caseiro</h1>
            <Paragraph>nome do produtor</Paragraph>
            <QuantityAndValues>
              <p>3x</p>
              <h1>R$ 6,99</h1>
            </QuantityAndValues>
          </ProductDetais>
        </div>
        <hr />
        <Total>
          <Paragraph>3 items</Paragraph>
          <h1>Total: 20,97</h1>
        </Total>
      </Body>
    </>
  );
};

export default Cart;
