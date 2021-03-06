import React, { useCallback, createRef } from 'react';

import LABELFORMS from '../../components/LabelForm-S-icon';
import LABELFORM from '../../components/LabelForm_cartao';

import { useAuth } from '../../hooks/auth';

import { BuildMain, Credenciais, Requisicao } from './style';

import { ReactComponent as MasterFlag } from '../../images/mc_symbol.svg';
import { ReactComponent as Usuario } from '../../images/email.svg';

const Card: React.FC = () => {
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
        <form onSubmit={handleOnSubmit} ref={formElement}>
          <Credenciais>
            <section className="cartao">
              <LABELFORM Icon={MasterFlag} Title="cartão" name="cartao" />
            </section>

            <section className="data-cvv">
              <div className="validade">
                <LABELFORMS Title="Validade" name="data" />
              </div>

              <div className="cvv">
                <LABELFORMS Title="Cód de Segurança" name="cvv" />
              </div>
            </section>

            <section className="nome">
              <LABELFORM Icon={Usuario} Title="Nome Completo" name="nome" />
            </section>

            <section className="cpf">
              <LABELFORMS Title="cpf" name="cpf" />
            </section>

            <section className="telefone-nasc">
              <div className="cellphone">
                <LABELFORMS Title="Telefone" name="telefone" />
              </div>

              <div className="birthday">
                <LABELFORMS Title="Data de Nascimento" name="nascimento" />
              </div>
            </section>
          </Credenciais>

          <Requisicao>
            <section className="button">
              <div>
                <button type="submit" className="first">
                  Salvar
                </button>
              </div>
            </section>
          </Requisicao>
        </form>
      </BuildMain>
    </>
  );
};

export default Card;
