/* eslint-disable react/require-default-props */
import { useForm } from 'components/Form';
import React, { createRef, useState } from 'react';

import MaskedInput, { maskArray } from 'react-text-mask';
import { LABEL, LABELHEADER } from './style';

interface Props {
  mask?: maskArray;
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  Title: string;
  required?: boolean;
  type?: string;
  name: string;
  isBorderHideable?: boolean;
  placeholder?: string;
}

const LABELFORM: React.FC<Props> = ({
  mask,
  Icon,
  Title,
  required,
  type,
  name,
  isBorderHideable = true,
  placeholder,
}: Props) => {
  const [isVisible, setIsVisible] = useState(!isBorderHideable || false);
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
          {Icon && <Icon />}
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        <MaskedInput
          mask={mask || false}
          name={name}
          type={type}
          required={required}
          ref={inputRef}
          placeholder={placeholder}
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
            if (isBorderHideable) {
              setIsVisible(true);
            }
          }}
          onBlur={() => {
            if (isBorderHideable) {
              setIsVisible(false);
            }
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
