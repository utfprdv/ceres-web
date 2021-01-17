import React, { useCallback, createRef } from 'react';

import LABELFORM from '../../components/LabelForm';

import Api from '../../services/api';
import { H1, FORM, DIV } from './style';
import { ReactComponent as Name } from '../../images/name.svg';
import { ReactComponent as Cep } from '../../images/cep.svg';
import { ReactComponent as City } from '../../images/city.svg';
import { ReactComponent as Neighborhood } from '../../images/neighborhood.svg';
import { ReactComponent as Adress } from '../../images/adress.svg';
import { ReactComponent as Complement } from '../../images/complement.svg';
import { ReactComponent as Email } from '../../images/email.svg';
import { ReactComponent as StartDate } from '../../images/start_date.svg';
import { ReactComponent as EndDate } from '../../images/end_date.svg';

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();
  const formDateElement = createRef<HTMLFormElement>();

  const handleOnSubmitOthers = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formDateElement.current && formElement.current) {
        formElement.current.classList.add('next');
        formDateElement.current.classList.remove('next');
      }
    },
    [formElement],
  );

  const handleOnSubmitDate = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formElement.current && formDateElement.current) {
        const bodyOthers = new FormData(formElement.current);
        const bodyDate = new FormData(formDateElement.current);
        // Api.ṕost('/login', body).then(res => console.log(res));
      }
    },
    [formDateElement],
  );

  return (
    <DIV>
      <H1>Cadastro de feira</H1>
      <FORM onSubmit={handleOnSubmitOthers} ref={formElement}>
        <LABELFORM Icon={Name} Title="Nome" />
        <LABELFORM Icon={Cep} Title="Cep" />
        <LABELFORM Icon={City} Title="Cidade" />
        <LABELFORM Icon={Neighborhood} Title="Bairro" required />
        <LABELFORM Icon={Adress} Title="Endereço" required />
        <LABELFORM Icon={Complement} Title="Complemento" />
        <LABELFORM Icon={Email} Title="Email" />
        <button type="submit">Enviar</button>
      </FORM>
      <FORM
        onSubmit={handleOnSubmitDate}
        ref={formDateElement}
        className="next"
      >
        <LABELFORM
          Icon={StartDate}
          Title="Data de início"
          required
          type="date"
        />
        <LABELFORM Icon={EndDate} Title="Data de fim" required type="date" />
        <button type="submit">Enviar</button>
      </FORM>
    </DIV>
  );
};

export default Login;
