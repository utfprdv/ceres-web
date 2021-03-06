import React, { createContext, useCallback, useContext, useState } from 'react';

import firebase, { auth } from '../utils/firebase';

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

interface AuthContextData {
  token?: string;
  uid?: string;
  signIn: (UserCredential: firebase.auth.UserCredential) => Promise<void>;
  signOut: () => void;
}
interface Props {
  children: React.ReactNode;
}

const AuthProvider: React.FC<Props> = ({ children }: Props) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@CeresWeb:token');
    const uid = localStorage.getItem('@CeresWeb:uid');

    if (token && uid) {
      return { token, uid };
    }

    return {};
  });

  const signIn = useCallback(
    async (UserCredential: firebase.auth.UserCredential) => {
      const { user } = UserCredential;
      if (user) {
        user.getIdToken().then(token => {
          const { uid } = user;

          localStorage.setItem('@CeresWeb:token', token);
          localStorage.setItem('@CeresWeb:uid', uid);

          setData({ token, uid });
        });
      }
    },
    [],
  );

  const signOut = useCallback(() => {
    localStorage.removeItem('@CeresWeb:token');
    localStorage.removeItem('@CeresWeb:uid');

    auth.signOut();

    setData({});
  }, []);

  return (
    <AuthContext.Provider
      value={{
        token: data.token,
        uid: data.uid,
        signIn,
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
