import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderUI, Logo, ListaLink, ListaCount } from './Header.style';

const Header: React.FC = () => {
  return (
    <HeaderUI>
      <Link to="/">
        <Logo>ceres</Logo>
      </Link>
      <Link to="/lista">
        <ListaLink>
          lista
          <ListaCount>12</ListaCount>
        </ListaLink>
      </Link>
    </HeaderUI>
  );
};

export default Header;
