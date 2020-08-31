import styled from 'styled-components';

export const MarketDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  & > div:last-of-type {
    text-align: right;
  }
`;

export const MarketTitle = styled.p`
  margin: 0;
  font-weight: 600;
`;

export const MarketSubtitle = styled.p`
  font-size: 60%;
  opacity: 0.8;
`;
