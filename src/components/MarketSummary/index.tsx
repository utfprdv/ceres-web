import React from 'react'
import {
  MarketDetails,
  MarketTitle,
  MarketSubtitle,
} from './MarketSummary.style'

import { Market } from '../../types'

type Props = {
  info: {
    date: string | undefined
    amount: number
    address: string
    id: number | undefined
    markets: Array<Market>
  }
  onChange: (market: number) => void
}

const MarketSummary = ({ info, onChange }: Props): React.ReactElement => (
  <MarketDetails>
    <div>
      <div>
        <div>
          <select
            className="select"
            onChange={e => onChange(Number(e.target.value))}
          >
            {info.markets.map(market => (
              <option className="options" value={market.id} key={market.id}>
                {market.cidade}
              </option>
            ))}
          </select>
        </div>
        <MarketSubtitle>{info.address}</MarketSubtitle>
      </div>
    </div>
    <div>
      <MarketTitle>
        {info.amount}
        produtos
      </MarketTitle>
      <MarketSubtitle>
        {info.date &&
          new Intl.DateTimeFormat('pt-br', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          }).format(new Date(info.date))}
      </MarketSubtitle>
    </div>
  </MarketDetails>
)

export default MarketSummary
