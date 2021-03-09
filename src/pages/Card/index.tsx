import React, { useCallback, createRef } from 'react';

import LABELFORM from '../../components/LabelForm';

import { BuildMain, Credenciais, Requisicao } from './style';

import { ReactComponent as MasterFlag } from '../../images/mc_symbol.svg';
import { ReactComponent as Usuario } from '../../images/name.svg';

const Card: React.FC = () => {
  const formElement = createRef<HTMLFormElement>();

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      if (formElement.current) {
        // const body = new FormData(formElement.current);
        // saveData({ body });
      }
    },
    [formElement],
  );

  return (
    <>
      <BuildMain>
        <form onSubmit={handleOnSubmit} ref={formElement}>
          <Credenciais>
            <section className="cartao">
              <LABELFORM
                Icon={MasterFlag}
                Title="cartão"
                name="cartao"
                isBorderHideable={false}
              />
            </section>

            <section className="data-cvv">
              <div className="validade">
                <LABELFORM
                  Title="Validade"
                  name="data"
                  isBorderHideable={false}
                />
              </div>

              <div className="cvv">
                <LABELFORM
                  Title="Cód de Segurança"
                  name="cvv"
                  isBorderHideable={false}
                />
              </div>
            </section>

            <section className="nome">
              <LABELFORM
                Icon={Usuario}
                Title="Nome Completo"
                name="nome"
                isBorderHideable={false}
              />
            </section>

            <section className="cpf">
              <LABELFORM Title="cpf" name="cpf" isBorderHideable={false} />
            </section>

            <section className="telefone-nasc">
              <div className="cellphone">
                <LABELFORM
                  Title="Telefone"
                  name="telefone"
                  isBorderHideable={false}
                />
              </div>

              <div className="birthday">
                <LABELFORM
                  Title="Data de Nascimento"
                  name="nascimento"
                  isBorderHideable={false}
                />
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
