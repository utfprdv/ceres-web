import styled from 'styled-components';

export const MarketDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;

  & > div:last-of-type {
    text-align: right;
  }
  
  .select{
    font-family: 'Montserrat';
    padding: 10px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1.5px;
    border-color: #666666;
    background: 0;
    margin: 0 15px 0 0;
    font-weight: 600;
    width: 185px;
  }
  
  .options{
    font-weight: 600;
    font-size: 16px;
  }
  `;
  
  export const MarketTitle = styled.p`
  margin: 0;
  font-weight: 600;
  
  `;
  
  export const MarketSubtitle = styled.p`
  font-size: 80%;
  opacity: 0.8;
  margin-left: 10px;
`;
