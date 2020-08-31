import React from 'react';
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
} from './InputCheckbox.style';

type Props = {
  checked: boolean;
};

const InputCheckbox: React.FC<Props> = ({ checked }: Props) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={checked} />
      <StyledCheckbox checked={checked} />
    </CheckboxContainer>
  )
};

export default InputCheckbox;
