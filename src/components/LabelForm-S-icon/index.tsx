import React, { createRef, useState } from 'react';

import { LABEL, LABELHEADER } from './style';

interface Props {
  Title: string;
  required?: boolean;
  type?: string;
  name: string;
}

const LABELFORMS: React.FC<Props> = ({
  Title,
  required,
  type,
  name,
}: Props) => {
  const [isVisible, setIsVisible] = useState(true);
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
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        <input
          name={name}
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

LABELFORMS.defaultProps = {
  required: false,
  type: 'text',
};

export default LABELFORMS;
