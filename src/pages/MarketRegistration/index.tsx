import React, { useCallback, createRef, useState } from 'react';

import Api from '../../services/api';
import { H1, FORM, LABEL, LABELHEADER } from './style';
import { ReactComponent as Name } from '../../images/name.svg';
import { ReactComponent as Cep } from '../../images/cep.svg';
import { ReactComponent as City } from '../../images/city.svg';
import { ReactComponent as Neighborhood } from '../../images/neighborhood.svg';
import { ReactComponent as Adress } from '../../images/adress.svg';
import { ReactComponent as Complement } from '../../images/complement.svg';
import { ReactComponent as Email } from '../../images/email.svg';

interface Props {
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  Title: string;
  required?: boolean;
}

const LABELFORM: React.FC<Props> = ({ Icon, Title, required }: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);
  const inputRef = createRef<HTMLInputElement>();

  return (
    <LABEL isVisible={isVisible}>
      <div>
        <LABELHEADER isInputFilled={isInputFilled}>
          <Icon />
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        <input
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
};

const Login: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formElement.current) {
        const body = new FormData(formElement.current);
        console.log(body.keys().next());
        Api.ṕost('/login', body).then(res => console.log(res));
      }
    },
    [formElement],
  );

  return (
    <>
      <H1>Cadastro de feira</H1>
      <FORM onSubmit={handleOnSubmit} ref={formElement}>
        <LABELFORM Icon={Name} Title="Nome" />
        <LABELFORM Icon={Cep} Title="Cep" />
        <LABELFORM Icon={City} Title="Cidade" />
        <LABELFORM Icon={Neighborhood} Title="Bairro" required />
        <LABELFORM Icon={Adress} Title="Endereço" required />
        <LABELFORM Icon={Complement} Title="Complemento" />
        <LABELFORM Icon={Email} Title="Email" />
        <button type="submit">Enviar</button>
      </FORM>
    </>
  );
};

export default Login;
