import React, { useCallback, createRef, useState } from 'react';

import Api from '../../services/api';
import { H1, FORM, LABEL, LABELHEADER, DIV } from './style';
import { ReactComponent as Name } from '../../images/name.svg';
import { ReactComponent as Cep } from '../../images/cep.svg';
import { ReactComponent as City } from '../../images/city.svg';
import { ReactComponent as Neighborhood } from '../../images/neighborhood.svg';
import { ReactComponent as Adress } from '../../images/adress.svg';
import { ReactComponent as Complement } from '../../images/complement.svg';
import { ReactComponent as Email } from '../../images/email.svg';
import { ReactComponent as StartDate } from '../../images/start_date.svg';
import { ReactComponent as EndDate } from '../../images/end_date.svg';

interface Props {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  Title: string;
  required?: boolean;
  type?: string;
}

const LABELFORM: React.FC<Props> = ({ Icon, Title, required, type }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  return (
    <LABEL
      isVisible={isVisible}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        inputRef.current?.click();
      }}
    >
      <div>
        <LABELHEADER isInputFilled={isInputFilled}>
          <Icon />
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        <input
          type={type}
          required={required}
          ref={inputRef}
          onChange={() => {
            if (
              inputRef?.current?.value !== undefined &&
              inputRef?.current?.value !== ''
            ) {
              setIsInputFilled(true);
            } else {
              setIsInputFilled(false);
            }
          }}
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

LABELFORM.defaultProps = {
  required: false,
  type: 'text',
};

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();
  const formDateElement = createRef<HTMLFormElement>();

  const handleOnSubmitOthers = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formElement.current) {
        // const body = new FormData(formElement.current);
        // Api.ṕost('/login', body).then(res => console.log(res));
        if (formDateElement.current) {
          formElement.current.classList.add('next');
          formDateElement.current.classList.remove('next');
        }
      }
    },
    [formElement],
  );

  const handleOnSubmitDate = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formDateElement.current) {
        // const body = new FormData(formElement.current);
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
