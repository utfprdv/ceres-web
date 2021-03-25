import React, { useState } from 'react'
// import { useForm } from '../Form'
import { LABEL, LABELHEADER } from './style'

type Props = {
  mask?: Array<RegExp | string>
  Icon?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined
    }
  >
  Title: string
  required?: boolean
  type?: string
  name: string
  isBorderHideable?: boolean
  placeholder?: string
}

const LABELFORM = ({
  mask,
  name,
  type,
  placeholder,
  Icon,
  Title,
  required,
  isBorderHideable = true,
}: Props): React.ReactElement => {
  const [isVisible] = useState(!isBorderHideable || false)
  const [isInputFilled] = useState(false)
  // const inputRef: React.RefObject<MaskedInput> = createRef()
  // eslint-disable-next-line no-console
  console.log(mask, name, placeholder, type)
  // const { setInput } = useForm()

  return (
    <LABEL
      isVisible={isVisible}
      onClick={() => {
        // eslint-disable-next-line no-unused-expressions
        // inputRef.current?.inputElement?.click()
      }}
    >
      <div>
        <LABELHEADER isInputFilled={isInputFilled}>
          {Icon && <Icon />}
          <p>{Title}</p>
          {required ? <p>Obrigatório</p> : <></>}
        </LABELHEADER>
        {/* <MaskedInput
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
              )
            }
            if (
              (inputRef?.current?.inputElement as HTMLInputElement).value !==
                undefined &&
              (inputRef?.current?.inputElement as HTMLInputElement).value !== ''
            ) {
              setIsInputFilled(true)
            } else {
              setIsInputFilled(false)
            }
          }}
          onFocus={() => {
            if (isBorderHideable) {
              setIsVisible(true)
            }
          }}
          onBlur={() => {
            if (isBorderHideable) {
              setIsVisible(false)
            }
          }}
        /> */}
      </div>
    </LABEL>
  )
}

LABELFORM.defaultProps = {
  mask: [],
  Icon: null,
  // type: 'text',
  required: false,
  type: '',
  isBorderHideable: false,
  placeholder: '',
}

export default LABELFORM
