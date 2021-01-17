import React, { createRef, useState } from 'react';

import { LABEL, LABELHEADER } from './style';

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

export default LABELFORM;
