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
    padding: 5px;
    border-style: solid;
    border-radius: 5px;
    border-width: 1.5px;
    border-color: #666666;
  }

  .selectBox{
    width: 210px;
    padding: 5px 20px 10px 10px;
    position: absolute;
    background-color: #fffcfa;
    border-radius: 5px;
  }

  .options{
    font-weight: 600;
    font-size: 16px;
    margin: 5px;
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .separete{
    opacity: 0.3;
    margin: -5px 0 0 -15px;
    padding: 0 0 0 20px;
    letter-spacing: -2px;
  }
  `;
  
  export const MarketTitle = styled.p`
  margin: 0;
  font-weight: 600;
  width: 200px;
  

  .icon{
    margin: 10px 0 0 82px;
    opacity: 0.3;
    position: absolute;
  }
  `;
  
  export const MarketSubtitle = styled.p`
  font-size: 60%;
  opacity: 0.8;
`;
