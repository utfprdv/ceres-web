import React, { useCallback } from 'react';

import firebase, { auth } from 'utils/firebase';

import LABELFORM from '../../components/LabelForm';

import { useAuth } from '../../hooks/auth';

import { BuildMain, Requisicao, Credenciais } from './Login.style';

import { FormProvider as Form } from '../../components/Form';

import { ReactComponent as Usuario } from '../../images/email.svg';
import { ReactComponent as Senha } from '../../images/senha.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Ceres } from '../../images/ceres_logo.svg';
import { ReactComponent as Google } from '../../images/logo_google.svg';

const Login: React.FC = () => {
  const { signIn } = useAuth();

  const HandleAuthError = useCallback((error: firebase.auth.AuthError) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage);
  }, []);

  const HandleOnClickLoginGoogle = useCallback(() => {
    const provider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(provider).then(signIn).catch(HandleAuthError);
  }, [HandleAuthError, signIn]);

  const handleOnSubmit = useCallback(
    (data: { email: string; password: string }) => {
      const { email, password } = data;

      auth
        .signInWithEmailAndPassword(email, password)
        .then(signIn)
        .catch(HandleAuthError);
    },
    [HandleAuthError, signIn],
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
        <Form onSubmit={handleOnSubmit}>
          <Credenciais>
            <section>
              <LABELFORM Icon={Usuario} Title="Email" required name="email" />
            </section>

            <section>
              <LABELFORM
                Icon={Senha}
                Title="Senha"
                required
                name="password"
                type="password"
              />
            </section>
          </Credenciais>

          <Requisicao>
            <section className="button">
              <div>
                <button type="submit" className="first">
                  login
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="second"
                  onClick={HandleOnClickLoginGoogle}
                >
                  <Google />
                  <div>or sign-in with Google</div>
                </button>
              </div>
            </section>

            {/* <div className="signUp">
              <a href="/cadastrar">cadastre-se</a>
            </div> */}
          </Requisicao>
        </Form>
      </BuildMain>
    </>
  );
};

export default Login;
