import React from 'react'
import {
  MarketDetails,
  MarketTitle,
  MarketSubtitle,
} from './MarketSummary.style'

type Props = {
  info: {
    date: Date
    amount: number
    address: string
    id: number
    markets: any[]
  }
  onChange: (market: number) => void
}

const MarketSummary: React.FC<Props> = ({ info, onChange }: Props) => {
  return (
    <>
      <>
        <MarketDetails>
          <div>
            <div>
              <div>
                <select
                  className="select"
                  onChange={e => onChange(Number(e.target.value))}
                >
                  {info.markets.map(market => (
                    <option
                      className="options"
                      value={market.id}
                      key={market.id}
                    >
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
      </>
    </>
  )
}

export default MarketSummary
