import React, { useCallback, createRef } from 'react'

import { FormProvider as Form } from '../../components/Form'
import LABELFORM from '../../components/LabelForm'

import { BuildMain, Credenciais, Requisicao } from './style'

import { ReactComponent as MasterFlag } from '../../images/mc_symbol.svg'
import { ReactComponent as Usuario } from '../../images/name.svg'
import { ReactComponent as Phone } from '../../images/phone.svg'

const Card: React.FC = () => {
  const formElement = createRef<HTMLFormElement>()

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (formElement.current) {
        // const body = new FormData(formElement.current)
        // saveData({ body })
      }
    },
    [formElement],
  )

  return (
    <>
      <BuildMain>
        <Form onSubmit={handleOnSubmit}>
          <Credenciais>
            <section className="cartao">
              <LABELFORM
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                  ' ',
                  /\d/,
                  /\d/,
                  /\d/,
                  /\d/,
                ]}
                Icon={MasterFlag}
                Title="cartão"
                name="cartao"
                isBorderHideable={false}
              />
            </section>

            <section className="data-cvv">
              <div className="validade">
                <LABELFORM
                  mask={[/[1-9]/, /\d/, '/', /\d/, /\d/]}
                  placeholder="MM/AA"
                  Title="Validade"
                  name="data"
                  isBorderHideable={false}
                />
              </div>

              <div className="cvv">
                <LABELFORM
                  mask={[/[1-9]/, /\d/, /\d/]}
                  placeholder="CVV"
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
              <LABELFORM
                mask={[
                  /[1-9]/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '.',
                  /\d/,
                  /\d/,
                  /\d/,
                  '-',
                  /\d/,
                  /\d/,
                ]}
                placeholder="___.___.___-__"
                Title="cpf"
                name="cpf"
                isBorderHideable={false}
              />
            </section>

            <section className="telefone-nasc">
              <div className="cellphone">
                <LABELFORM
                  mask={[
                    '(',
                    /[1-9]/,
                    /\d/,
                    ')',
                    ' ',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="(__)____-____"
                  Icon={Phone}
                  Title="Telefone"
                  name="telefone"
                  isBorderHideable={false}
                />
              </div>

              <div className="birthday">
                <LABELFORM
                  mask={[
                    /[1-9]/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                  ]}
                  placeholder="DD/MM/AA"
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
        </Form>
      </BuildMain>
    </>
  )
}

export default Card
