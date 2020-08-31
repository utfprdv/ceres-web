import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { ReactComponent as IconBack } from 'images/back.svg';
import { HeaderUI, Logo, ListaLink, ListaCount } from './Header.style';

const Header: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  return (
    <HeaderUI>
      {history.length >= 2 && location.pathname !== '/' ? (
        <button
          type="button"
          style={{
            display: 'flex',
            alignItems: 'center',
            marginLeft: -10,
            appearance: 'none',
            background: 'transparent',
            border: 0,
            color: '#fff',
          }}
          onClick={() => history.goBack()}
        >
          <IconBack />
          Voltar
        </button>
      ) : (
        <Link to="/">
          <Logo>ceres</Logo>
        </Link>
      )}
      <Link to="/lista">
        <ListaLink>
          lista
          <ListaCount>3</ListaCount>
        </ListaLink>
      </Link>
    </HeaderUI>
  );
};

export default Header;
