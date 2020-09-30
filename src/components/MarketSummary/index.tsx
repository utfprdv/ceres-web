import React from 'react';
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
    {info.map(info => 
 <>
        <MarketDetails>
          <div>
            <div>
              <div>
                <select className='select'>
                  <option className='options' value="dv" id="0" >Dois Vizinhos</option>
                  <option className='options' value="fb" id="1" >Francisco Beltrão</option>
                  <option className='options' value="pb" id="2" >Pato Branco</option>
                  <option className='options' value="mm" id="3" >Marmeleiro</option>
                  <option className='options' value="sj" id="4" >São João</option>
                </select>
              </div>
              <MarketSubtitle> {info.city.address} </MarketSubtitle>
            </div>
          </div>
          <div>
            <MarketTitle>{info.amount} produtos</MarketTitle>
            <MarketSubtitle>{info.date.day} de {info.date.month}, {info.date.year}</MarketSubtitle>
          </div>
        </MarketDetails>
  </>
      )}
    </>
  );
};

export default MarketSummary;
