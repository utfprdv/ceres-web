/* eslint-disable no-console */
import React from 'react'

import { deliveryDate } from 'utils'

import PlaceButton from '../PlaceButton'
import style from './MarketSummary.module.scss'

const MarketSummary = (): React.ReactElement => {
  return (
    <aside
      className={style.root}
      data-label="Informações sobre cidade e data de entrega"
    >
      <div>
        <p className={style.label}>próxima entrega</p>
        <time className={style.time} dateTime="2001-05-15 19:00">
          {deliveryDate()}
        </time>
      </div>

      <PlaceButton label="Dois Vizinhos" />
    </aside>
  )
}

export default MarketSummary
