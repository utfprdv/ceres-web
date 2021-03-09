/* eslint-disable react/require-default-props */
import { useForm } from 'components/Form';
import React, { createRef, useState } from 'react';

import MaskedInput from 'react-text-mask';
import { LABEL, LABELHEADER } from './style';

interface Props {
  mask?: string;
  Icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  Title: string;
  required?: boolean;
  type?: string;
  name: string;
}

const LABELFORM: React.FC<Props> = ({
  mask,
  Icon,
  Title,
  required,
  type,
  name,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInputFilled, setIsInputFilled] = useState(false);
  const inputRef: React.RefObject<MaskedInput> = createRef();

  const { setInput } = useForm();

  return (
    <LABEL
      isVisible={isVisible}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        inputRef.current?.inputElement?.click();
      }}
    >
      <div>
        <LABELHEADER isInputFilled={isInputFilled}>
          <Icon />
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        <MaskedInput
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
          name={name}
          type={type}
          required={required}
          ref={inputRef}
          onChange={() => {
            if (inputRef.current) {
              setInput(
                name,
                (inputRef.current.inputElement as HTMLInputElement).value,
              );
            }
            if (
              (inputRef?.current?.inputElement as HTMLInputElement).value !==
                undefined &&
              (inputRef?.current?.inputElement as HTMLInputElement).value !== ''
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

export default LABELFORM;
