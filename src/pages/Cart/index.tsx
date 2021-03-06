import React from 'react';

import {
  Header,
  Body,
  Section,
  DeliveryInfo,
  Change,
  MiscInfo,
  ProductDetais,
  QuantityAndValues,
  Total,
  Paragraph,
  Paymment,
  Checkout,
} from './style';
import { ReactComponent as DeliveryMan } from '../../images/delivery-man.svg';
import { ReactComponent as ProductImage } from '../../images/produto.svg';
import { ReactComponent as Arrow } from '../../images/seta.svg';
import { ReactComponent as MasterFlag } from '../../images/mc_symbol.svg';

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
          <Section>
            <ProductImage />
            <ProductDetais>
              <h1>Pão caseiro</h1>
              <Paragraph>nome do produtor</Paragraph>
            </ProductDetais>
          </Section>
          <QuantityAndValues>
            <p>3x</p>
            <div className="values">
              <h1 className="usually">R$7,99</h1>
              <h1 className="promotional">R$6,99</h1>
            </div>
          </QuantityAndValues>
        </div>
        <hr />
        <Total>
          <div className="total_info">
            <p>subtotal de mercadoria</p>
            <p>taxa de envio</p>
            <h1>total de pedido</h1>
          </div>

          <div className="total_values">
            <p>R$20,97</p>
            <p>R$7,00</p>
            <h1>R$27,97</h1>
            <button type="submit" className="arrow">
              <Arrow />
            </button>
          </div>
        </Total>
      </Body>

      <Paymment>
        <div className="master">
          <MasterFlag />
        </div>
        <section>
          <Paragraph>método de pagamento</Paragraph>
          <h1>**** **** **** 1234</h1>
        </section>
        <button type="submit" className="arrow">
          <Arrow />
        </button>
      </Paymment>

      <Checkout>
        <button type="submit" className="checkout-button">
          <h1>checkout (R$27,97)</h1>
        </button>
      </Checkout>
    </>
  );
};

export default Cart;
