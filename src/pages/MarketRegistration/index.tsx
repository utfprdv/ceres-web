import React, { useCallback, createRef, useState } from 'react'

import LABELFORM from '../../components/LabelForm'

import Api from '../../services/api'
import { H1, FORM, DIV, DIVFORM } from './style'
import { ReactComponent as Name } from '../../images/name.svg'
import { ReactComponent as Cep } from '../../images/cep.svg'
import { ReactComponent as City } from '../../images/city.svg'
import { ReactComponent as Neighborhood } from '../../images/neighborhood.svg'
import { ReactComponent as Adress } from '../../images/adress.svg'
import { ReactComponent as Complement } from '../../images/complement.svg'
import { ReactComponent as Email } from '../../images/email.svg'
import { ReactComponent as StartDate } from '../../images/start_date.svg'
import { ReactComponent as EndDate } from '../../images/end_date.svg'

const Login = (): React.ReactElement => {
  const formElement = createRef<HTMLFormElement>()
  const [firstDivIsHidden, setFirstDivIsHidden] = useState(true)
  const [secondDivIsHidden, setSecondDivIsHidden] = useState(false)

  const handleOnClick = useCallback(() => {
    setFirstDivIsHidden(false)
    setSecondDivIsHidden(true)
  }, [])

  const handleOnSubmit = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      if (formElement.current) {
        const formData = new FormData(formElement.current)

        // eslint-disable-next-line no-console
        Api.ṕost('/feira/', formData).then(res => console.log(res))
      }
    },
    [formElement],
  )

  return (
    <DIV>
      <H1>Cadastro de feira</H1>
      <FORM onSubmit={handleOnSubmit} ref={formElement}>
        <DIVFORM isVisible={firstDivIsHidden}>
          <LABELFORM Icon={Name} Title="Nome" name="name" />
          <LABELFORM Icon={Cep} Title="Cep" name="cep" />
          <LABELFORM Icon={City} Title="Cidade" name="city" />
          <LABELFORM
            Icon={Neighborhood}
            Title="Bairro"
            required
            name="neighborhood"
          />
          <LABELFORM Icon={Adress} Title="Endereço" required name="adress" />
          <LABELFORM Icon={Complement} Title="Complemento" name="complement" />
          <LABELFORM Icon={Email} Title="Email" name="email" />
          <button type="submit" onClick={handleOnClick}>
            Enviar
          </button>
        </DIVFORM>
        <DIVFORM isVisible={secondDivIsHidden}>
          <LABELFORM
            Icon={StartDate}
            Title="Data de início"
            required
            type="date"
            name="start_date"
          />
          <LABELFORM
            Icon={EndDate}
            Title="Data de fim"
            required
            type="date"
            name="end_date"
          />
          <button type="submit">Enviar</button>
        </DIVFORM>
      </FORM>
    </DIV>
  )
}

export default Login
