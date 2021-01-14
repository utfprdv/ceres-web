/* eslint-disable camelcase */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/ban-types */
import React, { createContext, useCallback, useContext, useState } from 'react';

import api from '../services/api';

interface AuthState {
  token: string;
  produtor_id: string;
}

interface SignInCredentials {
  body: FormData;
}

interface AuthContextData {
  produtor_id: string;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@ceresWeb:token');
    const produtor_id = localStorage.getItem('@ceresWeb:produtor_id');

    if (token && produtor_id) {
      return { token, produtor_id };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ body }) => {
    const response = await api.ṕost('/login', body);

    const { token, produtor_id } = response.data;

    localStorage.setItem('@ceresWeb:token', token);
    localStorage.setItem('@ceresWeb:produtor_id', produtor_id);

    setData({ token, produtor_id });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@ceresWeb:token');
    localStorage.removeItem('@ceresWeb:produtor_id');

    setData({} as AuthState);
  }, []);

  return (
    <AuthContext.Provider
      value={{ produtor_id: data.produtor_id, signIn, signOut }}
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
