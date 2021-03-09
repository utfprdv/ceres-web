/* eslint-disable react/prop-types */
import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext<FormContextData>({} as FormContextData);

interface IData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [name: string]: any;
}

interface FormContextData {
  data: IData;
  setData(newData: IData): void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setInput(name: string, newInput: any): void;
}
interface Props {
  children: React.ReactNode;
  onSubmit?(data: IData, e: React.FormEvent<HTMLFormElement>): void;
}

const FormProvider: React.FC<Props> = ({ children, onSubmit }: Props) => {
  const [data, setData] = useState({} as IData);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line no-unused-expressions
    onSubmit && onSubmit(data, e);
  };

  return (
    <FormContext.Provider
      value={{
        data,
        setData: newData => {
          setData(newData);
        },
        setInput: (name, newInput) => {
          setData({ ...data, [name]: newInput });
        },
      }}
    >
      <form onSubmit={handleOnSubmit}>{children}</form>
    </FormContext.Provider>
  );
};

function useForm(): FormContextData {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error('useForm must be used within an FormProvider');
  }

  return context;
}

export { FormProvider, useForm };
