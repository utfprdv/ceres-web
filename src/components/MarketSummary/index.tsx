import React from 'react';
import {
  MarketDetails,
  MarketTitle,
  MarketSubtitle,
} from './MarketSummary.style';

const MarketSummary: React.FC = () => {
  return (
    <MarketDetails>
      <div>
        <MarketTitle>122 produtos</MarketTitle>
        <MarketSubtitle>14 de setembro, 2020</MarketSubtitle>
      </div>
      <div>
        <MarketTitle>Dois Vizinhos</MarketTitle>
        <MarketSubtitle>Rua Salgado Filho, 171</MarketSubtitle>
      </div>
    </MarketDetails>
  );
};

export default MarketSummary;
