/* eslint-disable react/require-default-props */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-console */
import React from 'react'
// import { useSelector } from 'react-redux'

import { Pin } from 'images'
import style from './PlaceButton.module.scss'
// import modalStyle from '../ProductDetails/ProductDetails.module.scss'
// import { Store } from '../../types'

type Props = {
  label: string
  // onClick?: () => void
}

const PlaceButton = ({ label }: Props): React.ReactElement => {
  // const [isOpen, setOpen] = useState(false)
  // const cities = useSelector((state: Store) => state.app.cities)

  return (
    <div>
      <button
        className={style.root}
        type="button"
        onClick={() => {
          // onClick()
          // setOpen(val => !val)
        }}
      >
        <span className={style.icon}>
          <Pin />
        </span>
        <span className="accessibility-only">Atual cidade: </span>
        {label}
        <span className="accessibility-only">, clique para trocar</span>
      </button>
      {/* <div
        className={modalStyle.root}
        hidden={!isOpen}
        onKeyPress={() => console.log('key')}
        onClick={() => setOpen(false)}
      >
        <div className={[modalStyle.modal, style.modal].join(' ')}>
          <div
            className={style.innerModal}
            // eslint-disable-next-line no-console
            onKeyPress={(...args) => console.log(...args)}
            onClick={evt => {
              evt.stopPropagation()
            }}
          >
            <h2>Selecione sua cidade</h2>
            <br />
            {Object.values(cities).map(city => {
              return (
                <button type="button" key={city.id} className={style.button}>
                  {city.nome}
                </button>
              )
            })}
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default PlaceButton
