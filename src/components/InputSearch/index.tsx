import React from 'react'
import { ReactComponent as IconSearch } from 'images/search.svg'
import { Input, InputWrapper, InputIcon } from './InputSearch.style'

type Props = {
  placeholder: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const InputSearch: React.FC<Props> = ({ placeholder, onChange }: Props) => {
  return (
    <InputWrapper>
      <InputIcon>
        <IconSearch />
      </InputIcon>
      <Input placeholder={placeholder} onChange={onChange} />
    </InputWrapper>
  )
}

export default InputSearch
