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
}

const ItemBox: React.FC<ItemBoxProps> = ({
  Icon,
  notificationNumber = 0,
  children,
}: ItemBoxProps) => {
  return (
    <ItemDiv>
      {notificationNumber > 0 && (
        <Notification>
          <h5>{notificationNumber}</h5>
        </Notification>
      )}
      <Icon />
      <p>{children}</p>
    </ItemDiv>
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
          <StatusBar>
            <div>statusBAR</div>
            <p>73/100</p>
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
            <ItemBox Icon={Wallet} notificationNumber={1}>
              a pagar
            </ItemBox>
            <ItemBox Icon={Box}>a enviar</ItemBox>
            <ItemBox Icon={DeliveryMan}>a receber</ItemBox>
            <ItemBox Icon={Review}>a avaliar</ItemBox>
          </div>
        </MainContent>
      </Body>
    </>
  );
};

export default Profile;
