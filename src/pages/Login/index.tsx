import React, { useCallback, createRef } from 'react';

import LABELFORM from '../../components/LabelForm';

import { useAuth } from '../../hooks/auth';

import { BuildMain, Requisicao, Credenciais } from './Login.style';

import { ReactComponent as Usuario } from '../../images/email.svg';
import { ReactComponent as Senha } from '../../images/senha.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Ceres } from '../../images/ceres_logo.svg';
import { ReactComponent as Google } from '../../images/logo_google.svg';

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const { signIn } = useAuth();

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formElement.current) {
        const body = new FormData(formElement.current);
        signIn({ body });
      }
    },
    [formElement, signIn],
  );

  return (
    <>
      <BuildMain>
        <header>
          <div>
            <Logo />
          </div>

          <div>
            <Ceres />
          </div>
        </header>

        <form onSubmit={handleOnSubmit} ref={formElement}>
          <Credenciais>
            <section>
              <LABELFORM Icon={Usuario} Title="Email" required />
            </section>

            <section>
              <LABELFORM Icon={Senha} Title="Senha" required />
            </section>
          </Credenciais>

          <Requisicao>
            <section className="button">
              <div>
                <button type="button" className="first">
                  login
                </button>
              </div>
              <div>
                <button type="submit" className="second">
                  <Google />
                  <div>or sign-in with Google</div>
                </button>
              </div>
            </section>

            <div className="signUp">
              <a href="/cadastrar">cadastre-se</a>
            </div>
          </Requisicao>
        </form>
      </BuildMain>
    </>
  );
};

export default Login;
