import React, { useState } from 'react';
import {
  Container,
  Header,
  Section,
  TakeAwaySection,
  DeliverySection,
} from './style';
import { ReactComponent as TakeAway } from '../../images/take-away.svg';
import { ReactComponent as DeliveryMan } from '../../images/delivery-man-2.svg';
import { ReactComponent as Plus } from '../../images/plus.svg';

const Delivery: React.FC = () => {
  const [isDelivery, setIsDelivery] = useState(false);

  return (
    <Container>
      <Header isDelivery={isDelivery}>
        <section
          aria-hidden
          onClick={() => {
            setIsDelivery(false);
          }}
        >
          <section>
            <TakeAway />
            <div />
          </section>
          <h2>retire na feira</h2>
        </section>
        <div />
        <section
          aria-hidden
          onClick={() => {
            setIsDelivery(true);
          }}
          className="delivery"
        >
          <section>
            <DeliveryMan />
            <div />
          </section>
          <h2>receba em casa</h2>
        </section>
      </Header>
      <Section isDelivery={isDelivery}>
        <TakeAwaySection>
          <div>
            <h1>localização</h1>
            <p>
              esta feira é localizada na rua salgado filho, 171 no bairro das
              torres.
            </p>
          </div>
          <div>
            <h1>horário</h1>
            <p>você pode retirar seus produtos entre 8h30 e 18h</p>
          </div>
        </TakeAwaySection>
        <DeliverySection className="delivery">
          <header>
            <h1>endereços</h1>
            <p>escolha um endereço ou cadastre um novo</p>
          </header>
          <section>
            <div>
              <h3>casa da mãe</h3>
              <p>são cristovão, rua videira 53</p>
            </div>
            <div>
              <h3>trabalho</h3>
              <p>centro, rua pacová 1002</p>
            </div>
          </section>
          <footer>
            <Plus />
          </footer>
        </DeliverySection>
      </Section>
    </Container>
  );
};

export default Delivery;
