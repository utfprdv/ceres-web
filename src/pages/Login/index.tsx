import React, { useCallback, createRef, useRef } from 'react';

import axios, { AxiosError } from 'axios';
import { BuildMain, BuildHeader } from './Login.style';

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formElement.current) {
      const body = new FormData(formElement.current);
      axios({
        method: 'post',
        url: `https://ceres.app.br/api/login`,
        data: body,
        headers: { 'Content-Type': 'multipart/form-data' },
        validateStatus(status) {
          return status === 200;
        },
      })
        .then(res => console.log(res.data))
        .catch(err => {
          console.log(err);
        });
    }
  }, []);

  return (
    <>
      <BuildHeader>
        <img src="" alt="" />
      </BuildHeader>

      <BuildMain>
        <form onSubmit={handleOnSubmit} ref={formElement}>
          <section>
            <div>
              <img src="" alt="" />
            </div>
            <input
              placeholder="E-mail"
              type="text"
              name="email"
              className="email"
            />
          </section>

          <section>
            <div>
              <img src="" alt="" />
            </div>
            <input
              placeholder="Senha"
              type="text"
              name="password"
              className="senha"
            />
          </section>

          <div className="button">
            <button type="button"> Cadastrar </button>
            <button type="submit"> Entrar </button>
          </div>

          <div className="forgotPassword">
            <p>Esqueceu sua senha?</p>
          </div>
        </form>
      </BuildMain>
    </>
  );
};

export default Login;
