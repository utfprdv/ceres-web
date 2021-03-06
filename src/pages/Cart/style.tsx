import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  background: #ffffff;
  border-radius: 5px;

  padding: 14px;

  > svg {
    min-width: 36px;
    height: 100%;
  }
`;

export const Body = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin-top: 8px;
`;

export const DeliveryInfo = styled.div`
  margin-right: auto;
  margin-left: 20px;

  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    text-transform: lowercase;

    color: #0d4137;
  }
`;

export const Change = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: right;
  text-transform: lowercase;

  color: #0d4137;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0px;
`;

export const MiscInfo = styled.div`
  display: flex;
  padding-top: 18px;

  p {
    flex: 1;
  }

  div {
    background: #f69651;
    border-radius: 5px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;
    text-transform: lowercase;

    color: #ffffff;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 10px;
  }
`;

export const ProductImage = styled.img``;

export const ProductDetais = styled.div``;

export const QuantityAndValues = styled.div``;

export const Total = styled.div``;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
  text-transform: lowercase;

  color: rgba(0, 0, 0, 0.5);
`;
