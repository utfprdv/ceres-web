/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useCallback, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
// import * as yup from 'yup'
// import { pt } from 'yup-locale-pt'
// import 'yup-phone'

import { FormProvider as Form } from '../../components/Form'
import firebase, { auth } from '../../utils/firebase'

import LABELFORM from '../../components/LabelForm'

import { H1, DIV, DIVFORM } from './style'
import { ReactComponent as Phone } from '../../images/phone.svg'
import { ReactComponent as Confirmation } from '../../images/confirmation.svg'

// yup.setLocale(pt)

const PhoneConfirmation = (): React.ReactElement => {
  const recaptchaRef = useRef<HTMLDivElement>(null)
  const [phoneError, setPhoneError] = useState(<span />)
  const [isPhoneOk, setIsPhoneOk] = useState(false)
  const history = useHistory()

  const handleOnSubmit = useCallback(
    ({ phone, code }: { phone: string; code: string }) => {
      // const appVerifier = new firebase.auth.RecaptchaVerifier(
      //   recaptchaRef.current,
      //   {
      //     size: 'invisible',
      //   },
      // )

      // const schema = yup
      //   .object({
      //     phone: yup.string().phone().required(),
      //   })
      //   .defined()

      // schema
      //   .validate({
      //     phone: `+55${(phone.match(/\d+/g) || []).join('')}`,
      //   })
      //   .then(() => {
      //     if (!code)
      //       auth.currentUser
      //         ?.linkWithPhoneNumber(`+55${phone}`, appVerifier)
      //         .then(confirmationResult => {
      //           appVerifier.clear()
      //           setIsPhoneOk(true)
      //           // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //           // @ts-ignore
      //           window.confirmationResult = confirmationResult
      //         })
      //         .catch(error => {
      //           switch (error.code) {
      //             case 'auth/provider-already-linked':
      //               setPhoneError(
      //                 <span>Um telefone já está associado a esta conta</span>,
      //               )
      //               break
      //             case 'auth/captcha-check-failed':
      //               setPhoneError(
      //                 <span>Captcha inválido, tente novamente</span>,
      //               )
      //               break
      //             case 'auth/invalid-phone-number':
      //               setPhoneError(<span>Número de telefone inválido</span>)
      //               break
      //             case 'auth/missing-phone-number':
      //               setPhoneError(<span>Não foi informado um telefone</span>)
      //               break
      //             case 'auth/quota-exceeded':
      //               setPhoneError(
      //                 <span>
      //                   O limite de sms da deste projeto foi atingido, contate
      //                   os responsáveis
      //                 </span>,
      //               )
      //               break
      //             case 'auth/user-disabled':
      //               setPhoneError(<span>Usuário desabilitado</span>)
      //               break
      //             case 'auth/credential-already-in-use':
      //               setPhoneError(
      //                 <span>
      //                   Este telefone já está sendo usado, escolha outro
      //                 </span>,
      //               )
      //               break
      //             case 'auth/operation-not-allowed':
      //               setPhoneError(<span>Operação não permitida</span>)
      //               break
      //             case 'auth/too-many-requests':
      //               setPhoneError(
      //                 <span>
      //                   Nós bloqueamos este dispositivo devido a atividade
      //                   anormal. Provavelmente muitas tentativas foram feitas,
      //                   tente novamente mais tarde.
      //                 </span>,
      //               )
      //               break
      //             default:
      //               setPhoneError(<span>{error.message}</span>)
      //               break
      //           }
      //         })
      //   })
      //   .catch(() => {
      //     setPhoneError(
      //       <span>telefone deve ser um número de telefone válido</span>,
      //     )
      //   })

      if (code)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.confirmationResult
          .confirm(code)
          .then(() => {
            history.go(0)
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .catch((error: any) => {
            switch (error.code) {
              case 'auth/invalid-verification-code':
                setPhoneError(<span>Código inválido</span>)
                break
              case 'auth/missing-verification-code':
                setPhoneError(<span>Código de verificação não encontrado</span>)
                break
              default:
                setPhoneError(<span>{error.message}</span>)
                break
            }
          })
    },
    [history],
  )

  return (
    <DIV>
      <H1>Confirmação de telefone</H1>
      <Form onSubmit={handleOnSubmit}>
        <DIVFORM isVisible={!isPhoneOk}>
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
            Icon={Phone}
            Title="Telefone"
            name="phone"
          />
          {phoneError}
          <button type="submit">Enviar código sms</button>
        </DIVFORM>
        <DIVFORM isVisible={isPhoneOk}>
          <LABELFORM
            Icon={Confirmation}
            Title="Código de confirmação"
            name="code"
          />
          {phoneError}
          <button type="submit">Confirmar</button>
        </DIVFORM>
        <div id="recaptcha-container" ref={recaptchaRef} />
      </Form>
    </DIV>
  )
}

export default PhoneConfirmation
