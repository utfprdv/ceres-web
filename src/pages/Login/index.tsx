import React, { useCallback, useState } from 'react';

import firebase, { auth } from 'utils/firebase';

import { useHistory } from 'react-router-dom';

import { setLocale, string, object, SchemaOf } from 'yup';
import { pt } from 'yup-locale-pt';

import LABELFORM from '../../components/LabelForm';

import { BuildMain, Requisicao, Credenciais } from './Login.style';

import { FormProvider as Form } from '../../components/Form';

import { ReactComponent as Usuario } from '../../images/email.svg';
import { ReactComponent as Senha } from '../../images/senha.svg';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Ceres } from '../../images/ceres_logo.svg';
import { ReactComponent as Google } from '../../images/logo_google.svg';
import { ReactComponent as Facebook } from '../../images/logo_facebook.svg';
import { ReactComponent as Apple } from '../../images/logo_apple.svg';

setLocale(pt);

interface ISignIn {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const [loginError, setLoginError] = useState(<span />);
  const history = useHistory();

  const HandleAuthError = useCallback((error: firebase.auth.AuthError) => {
    switch (error.code) {
      case 'auth/user-disabled':
        setLoginError(<span>Usuário desativado!</span>);
        break;
      case 'auth/invalid-email':
        setLoginError(<span>Email inválido!</span>);
        break;
      case 'auth/wrong-password':
        setLoginError(<span>Senha incorreta!</span>);
        break;
      case 'auth/too-many-requests':
        setLoginError(
          <span>
            O login para esta conta foi desativado temporariamente pois foi
            feito tentativas repetitivas em pouco tempo!
          </span>,
        );
        break;
      case 'auth/user-not-found':
        setLoginError(<span>Usuário não encontrado!</span>);
        break;
      case 'auth/popup-closed-by-user':
        break;
      default:
        setLoginError(<span>{error.message}</span>);
        break;
    }
  }, []);
  const redirect = useCallback(() => {
    history.go(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [history]);

  const HandleOnClickLoginWithProvider = useCallback(
    provider => {
      auth.signInWithPopup(provider).then(redirect).catch(HandleAuthError);
    },
    [HandleAuthError, redirect],
  );

  const handleOnSubmit = useCallback(
    (data: ISignIn) => {
      const { email, password } = data;

      const schema: SchemaOf<ISignIn> = object({
        email: string().required().email(),
        password: string().required(),
      }).defined();

      schema
        .validate({
          email,
          password,
        })
        .then(() => {
          auth
            .signInWithEmailAndPassword(email, password)
            .then(redirect)
            .catch(HandleAuthError);
        })
        .catch(error => {
          setLoginError(<span>{error.errors[0]}</span>);
        });
    },
    [HandleAuthError, redirect],
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
            {loginError}
          </Credenciais>

          <Requisicao>
            <section className="button">
              <div>
                <button type="submit" className="first">
                  login
                </button>
              </div>
              <hr />
              <p>ou faça login com</p>
              <div>
                <button
                  type="button"
                  className="second"
                  onClick={() => {
                    HandleOnClickLoginWithProvider(
                      new firebase.auth.GoogleAuthProvider(),
                    );
                  }}
                >
                  <Google />
                  <div>Google</div>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="second"
                  onClick={() => {
                    HandleOnClickLoginWithProvider(
                      new firebase.auth.FacebookAuthProvider(),
                    );
                  }}
                >
                  <Facebook />
                  <div>Facebook</div>
                </button>
              </div>
              <div>
                <button
                  type="button"
                  className="second"
                  onClick={() => {
                    HandleOnClickLoginWithProvider(
                      new firebase.auth.OAuthProvider('apple.com'),
                    );
                  }}
                >
                  <Apple />
                  <div>Apple</div>
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
