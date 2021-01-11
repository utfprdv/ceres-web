import React, { useCallback, createRef, useRef } from 'react';

import { useAuth } from '../../hooks/auth';

import Api from '../../services/api';
import { BuildMain, Requisicao, Credenciais } from './Login.style';

import { ReactComponent as Usuario } from '../../images/usuario.svg';
import { ReactComponent as Senha } from '../../images/senha.svg';

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const { signIn } = useAuth();

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formElement.current) {
      const body = new FormData(formElement.current);
      // Api.ṕost('/login', body).then(res => console.log(res));
      signIn({ body });
    }
  }, []);

  return (
    <>
      <BuildMain>
        <form onSubmit={handleOnSubmit} ref={formElement}>
          <Credenciais>
            <section className="section-email">
              <Usuario />
              <input
                placeholder="E-mail"
                type="text"
                name="email"
                className="email"
              />
            </section>

            <section className="section-senha">
              <Senha />
              <input
                placeholder="Senha"
                type="password"
                name="password"
                className="senha"
              />
            </section>
          </Credenciais>

          <Requisicao>
            <section className="button">
              <div>
                <button type="button" className="first">
                  Cadastrar
                </button>
              </div>
              <div>
                <button type="submit" className="second">
                  Entrar
                </button>
              </div>
            </section>

            <div className="forgotPassword">
              <a href="#">Esqueceu sua senha?</a>
            </div>
          </Requisicao>
        </form>
      </BuildMain>
    </>
  );
};

export default Login;
