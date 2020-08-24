import React from 'react';
import { Input } from './InputSearch.style';

type Props = {
  placeholder: string;
};

const InputSearch: React.FC<Props> = ({ placeholder }: Props) => {
  return <Input placeholder={placeholder} />;
};

export default InputSearch;
