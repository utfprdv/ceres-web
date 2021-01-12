import React, { useCallback, createRef, useState } from 'react';

import Api from '../../services/api';
import { H1, FORM, LABEL } from './style';
import { ReactComponent as User } from '../../images/usuario.svg';

const LABELFORM: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <LABEL isVisible={isVisible}>
      <div>
        <div>
          <User />
          <p>Nome</p>
        </div>
        <input
          onFocus={() => {
            setIsVisible(true);
          }}
          onBlur={() => {
            setIsVisible(false);
          }}
        />
      </div>
    </LABEL>
  );
};

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const handleOnSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formElement.current) {
      const body = new FormData(formElement.current);
      Api.ṕost('/login', body).then(res => console.log(res));
    }
  }, []);

  return (
    <>
      <H1>Cadastro de feira</H1>
      <FORM onSubmit={handleOnSubmit} ref={formElement}>
        <LABELFORM />
        <LABELFORM />
      </FORM>
    </>
  );
};

export default Login;
