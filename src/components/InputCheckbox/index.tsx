import React from 'react'
import {
  CheckboxContainer,
  HiddenCheckbox,
  StyledCheckbox,
  Icon
} from './InputCheckbox.style'

type Props = {
  checked: boolean
}

const InputCheckbox: React.FC<Props> = ({ checked }: Props) => {
  return (
    <CheckboxContainer>
      <HiddenCheckbox defaultChecked={checked} />
      <StyledCheckbox checked={checked}>
        <Icon viewBox="0 0 24 24">
          <polyline points="20 6 9 17 4 12" />
        </Icon>
      </StyledCheckbox>
    </CheckboxContainer>
  )
}

export default InputCheckbox
