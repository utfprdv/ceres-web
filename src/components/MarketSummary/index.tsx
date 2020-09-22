import React from 'react';
import { ReactComponent as IconBin } from 'images/selection.svg';
import {
  MarketDetails,
  MarketTitle,
  MarketSubtitle,
} from './MarketSummary.style';

type Props= {
  info:{
    date:{
      day: number,
      month: string,
      year: number,
    },
    amount: number,
    city: {
      name: string,
      address: string,
    }
    id: number;
  }[]
};

const MarketSummary: React.FC<Props> = ({ info }: Props) => {
  return (
    <>
    {info.map(info => {
      return(
        <MarketDetails>
          <div>
            <div className='select'>
              <MarketTitle>
                  {info.city.name}
                  <IconBin className='icon'/>
                </MarketTitle>
              <MarketSubtitle> {info.city.address} </MarketSubtitle>
            </div>
            <div className='selectBox' >
              <div className='options' >
                Dois Vizinhos
              </div>
              <div className="separete">_____________________________</div>
              <div className='options' >
                Pato Branco
              </div>
              <div className="separete">_____________________________</div>
              <div className='options' >
                Marmeleiro
              </div>
              <div className="separete">_____________________________</div>
              <div className='options' >
                Francisco Beltrão
              </div>
            </div>
          </div>
          <div>
            <MarketTitle>{info.amount} produtos</MarketTitle>
            <MarketSubtitle>{info.date.day} de {info.date.month}, {info.date.year}</MarketSubtitle>
          </div>
        </MarketDetails>
      )
    })}
    </>
  );
};

export default MarketSummary;
