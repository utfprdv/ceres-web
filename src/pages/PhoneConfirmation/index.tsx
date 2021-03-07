/* eslint-disable no-unused-expressions */
import React, { useCallback, useRef, useState } from 'react';

import { FormProvider as Form } from 'components/Form';
import firebase, { auth } from 'utils/firebase';
import LABELFORM from '../../components/LabelForm';

import { H1, DIV, DIVFORM } from './style';
import { ReactComponent as Phone } from '../../images/phone.svg';
import { ReactComponent as Confirmation } from '../../images/confirmation.svg';

const PhoneConfirmation: React.FC = () => {
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const [phoneError, setPhoneError] = useState(<span />);
  const [isPhoneOk, setIsPhoneOk] = useState(false);

  const handleOnSubmit = useCallback(
    ({ phone, code }: { phone: string; code: string }) => {
      const appVerifier = new firebase.auth.RecaptchaVerifier(
        recaptchaRef.current,
        {
          size: 'invisible',
        },
      );
      if (!code)
        auth.currentUser
          ?.linkWithPhoneNumber(phone, appVerifier)
          .then(confirmationResult => {
            appVerifier.clear();
            setIsPhoneOk(true);
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            window.confirmationResult = confirmationResult;
          })
          .catch(error => {
            switch (error.code) {
              case 'auth/provider-already-linked':
                setPhoneError(
                  <span>Um telefone já está associado a esta conta</span>,
                );
                break;
              case 'auth/captcha-check-failed':
                setPhoneError(<span>Captcha inválido, tente novamente</span>);
                break;
              case 'auth/invalid-phone-number':
                setPhoneError(<span>Número de telefone inválido</span>);
                break;
              case 'auth/missing-phone-number':
                setPhoneError(<span>Não foi informado um telefone</span>);
                break;
              case 'auth/quota-exceeded':
                setPhoneError(
                  <span>
                    O limite de sms da deste projeto foi atingido, contate os
                    responsáveis
                  </span>,
                );
                break;
              case 'auth/user-disabled':
                setPhoneError(<span>Usuário desabilitado</span>);
                break;
              case 'auth/credential-already-in-use':
                setPhoneError(
                  <span>Este telefone já está sendo usado, escolha outro</span>,
                );
                break;
              case 'auth/operation-not-allowed':
                setPhoneError(<span>Operação não permitida</span>);
                break;
              case 'auth/too-many-requests':
                setPhoneError(
                  <span>
                    Nós bloqueamos este dispositivo devido a atividade anormal.
                    Provavelmente muitas tentativas foram feitas, tente
                    novamente mais tarde.
                  </span>,
                );
                break;
              default:
                setPhoneError(<span>{error.message}</span>);
                break;
            }
          });
      if (code)
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        window.confirmationResult.confirm(code);
    },
    [],
  );

  return (
    <DIV>
      <H1>Confirmação de telefone</H1>
      <Form onSubmit={handleOnSubmit}>
        <DIVFORM isVisible={!isPhoneOk}>
          <LABELFORM Icon={Phone} Title="Telefone" name="phone" />
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
  );
};

export default PhoneConfirmation;
