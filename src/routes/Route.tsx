/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  Route as ReactDOMRoute,
  RouteProps as ReactDOMRouteProps,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface RouteProps extends ReactDOMRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user, userDataPresent } = useAuth();

  if (userDataPresent) {
    const decidePathName = () => {
      if (!!user && !user?.phoneNumber) {
        return '/confirmacao-telefone';
      }
      if (isPrivate) {
        return '/';
      }
      return '/perfil';
    };

    return (
      <ReactDOMRoute
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...rest}
        render={({ location }) => {
          if (isPrivate === true && !!user) {
            if (user?.phoneNumber) {
              return <Component />;
            }
            if (location.pathname === '/confirmacao-telefone') {
              return <Component />;
            }
            return (
              <Redirect
                to={{
                  pathname: decidePathName(),
                  state: { from: location },
                }}
              />
            );
          }
          if (isPrivate === false && !user) {
            return <Component />;
          }

          return (
            <Redirect
              to={{
                pathname: decidePathName(),
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  }

  return null;
};

export default Route;
