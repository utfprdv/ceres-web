import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as IconBack } from 'images/back.svg';
import {
  HeaderUI,
  Logo,
  ListaLink,
  ListaCount,
  BackButton,
} from './Header.style';

type Props = {
  listCount: number;
};
const Header: React.FC<Props> = ({ listCount }: Props) => {
  const history = useHistory();
  const location = useLocation();

  return (
    <HeaderUI>
      {history.length >= 2 && location.pathname !== '/' ? (
        <BackButton onClick={history.goBack}>
          <IconBack />
          Voltar
        </BackButton>
      ) : (
        <Link to="/">
          <Logo>ceres</Logo>
        </Link>
      )}
      {location.pathname === '/login' ? (
        <></>
      ) : (
        <Link to="/lista">
          <ListaLink>
            lista
            {listCount > 0 && <ListaCount>{listCount}</ListaCount>}
          </ListaLink>
        </Link>
      )}
    </HeaderUI>
  );
};

type RootState = {
  shop: any;
};

export default connect((state: RootState) => ({
  listCount: state.shop.products.length,
}))(Header);
