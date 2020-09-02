import React, { useState } from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './InputCheckbox.style';

type Props = {
  checked: boolean;
};

const InputCheckbox: React.FC<Props> = ({ checked }: Props) => {

  const [checkFlag, setCheckFlag] = useState(false);

  return (
    <CheckboxContainer onClick={() => {
      setCheckFlag(!checked);
      checked = !checked;
    }} >
      <HiddenCheckbox checked={checkFlag} />
      <StyledCheckbox checked={checkFlag}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
};

export default InputCheckbox;
