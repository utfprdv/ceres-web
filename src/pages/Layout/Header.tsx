import React from 'react';
import { connect } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as IconBack } from 'images/back.svg';
import { useAuth } from 'hooks/auth';
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
  const { user, userDataPresent } = useAuth();

  const chooseHeaderOption = () => {
    if (userDataPresent) {
      if (user !== null) {
        // usuário deslogado
        switch (location.pathname) {
          case '/login':
            return <></>;
          case '/lista':
            return (
              <Link to="/login">
                <ListaLink>Login</ListaLink>
              </Link>
            );
          case '/confirmacao-telefone':
            return <></>;
          case '/perfil':
            return <></>;
          default:
            return (
              <Link to="/lista">
                <ListaLink>
                  lista
                  {listCount > 0 && <ListaCount>{listCount}</ListaCount>}
                </ListaLink>
              </Link>
            );
        }
      } else {
        switch (location.pathname) {
          default:
            return (
              <Link to="/login">
                <ListaLink>login</ListaLink>
              </Link>
            );
        }
      }
    }
    return <></>;
  };

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
      {chooseHeaderOption()}
    </HeaderUI>
  );
};

type RootState = {
  shop: any;
};

export default connect((state: RootState) => ({
  listCount: state.shop.products.length,
}))(Header);
