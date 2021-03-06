import React, { createContext, useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import firebase, { auth } from '../utils/firebase';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface IState {
  userDataPresent: boolean;
  user: firebase.User | null;
  listener: firebase.Unsubscribe | null;
}
interface AuthContextData {
  user?: firebase.User | null;
  userDataPresent: boolean;
  signOut: () => void;
}
interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [state, changeState] = useState<IState>({
    userDataPresent: false,
    user: null,
    listener: null,
  });
  const history = useHistory();

  useEffect(() => {
    if (state.listener == null) {
      changeState({
        ...state,
        listener: auth.onAuthStateChanged(user => {
          if (user) {
            changeState(oldState => ({
              ...oldState,
              userDataPresent: true,
              user,
            }));
          } else {
            changeState(oldState => ({
              ...oldState,
              userDataPresent: true,
              user: null,
            }));
          }
        }),
      });
    }
    return () => {
      if (state.listener) state.listener();
    };
  }, [state]);

  const signOut = () => {
    auth.signOut();
    history.go(0);
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        userDataPresent: state.userDataPresent,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
