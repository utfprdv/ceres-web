import React from 'react';

import {
  Header,
  NameAndStatusBar,
  StatusBar,
  Body,
  HeaderBody,
  MainContent,
  Notification,
  ItemDiv,
} from './style';
import NonProfilePicture from '../../images/non_profile_picture.svg';
import { ReactComponent as Wallet } from '../../images/wallet.svg';
import { ReactComponent as Box } from '../../images/box.svg';
import { ReactComponent as DeliveryMan } from '../../images/delivery-man.svg';
import { ReactComponent as Review } from '../../images/review.svg';

interface ItemBoxProps {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  notificationNumber?: number;
  children: React.ReactNode;
  href: string;
}

const ItemBox: React.FC<ItemBoxProps> = ({
  Icon,
  notificationNumber = 0,
  children,
  href,
}: ItemBoxProps) => {
  return (
    <a href={href}>
      <ItemDiv>
        {notificationNumber > 0 && (
          <Notification>
            <h5>{notificationNumber}</h5>
          </Notification>
        )}
        <Icon />
        <p>{children}</p>
      </ItemDiv>
    </a>
  );
};

ItemBox.defaultProps = {
  notificationNumber: 0,
};

const Profile: React.FC = () => {
  return (
    <>
      <Header>
        <div>
          <img src={NonProfilePicture} alt="foto de perfil" />
        </div>
        <NameAndStatusBar>
          <h1>Jonh Doe(Admin)</h1>
          <StatusBar progress={20} max={100}>
            <div>
              <div />
            </div>
            <span className="progressStatus">
              <p className="progress" />
              <p>/</p>
              <p className="max" />
            </span>
          </StatusBar>
        </NameAndStatusBar>
      </Header>
      <Body>
        <HeaderBody>
          <h2>Minhas compras</h2>
          <p>Vizualizar histórico de compras</p>
        </HeaderBody>
        <MainContent>
          <div>
            <ItemBox Icon={Wallet} notificationNumber={1} href="/pagar">
              a pagar
            </ItemBox>
            <ItemBox Icon={Box} href="/enviar">
              a enviar
            </ItemBox>
            <ItemBox Icon={DeliveryMan} href="/receber">
              a receber
            </ItemBox>
            <ItemBox Icon={Review} href="/avaliar">
              a avaliar
            </ItemBox>
          </div>
        </MainContent>
      </Body>
    </>
  );
};

export default Profile;
