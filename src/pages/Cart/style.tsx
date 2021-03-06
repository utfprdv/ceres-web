import styled, { css } from 'styled-components';

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
  padding-bottom: 15px;
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
  margin-bottom: 3px;
  padding-left: 15px;
  font-family: Montserrat;

  p {
    flex: 1;
    font-size: 13px;
    padding-top: 4.5px;
  }

  div {
    width: 18vw;
    height: 3.3vh;
    background: #f69651;
    border-radius: 5px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 19px;
    text-transform: lowercase;
    text-align: center;
    color: #ffffff;

    /* Inside Auto Layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 15px;
  }
`;

export const Section = styled.section`
  padding-left: 15px;
  padding-top: 10px;
  margin-right: 14px;
  display: flex;

  svg {
    margin: 0 12px 0 0;
  }
`;

export const QuantityAndValues = styled.div`
  text-align: end;
  height: 0;
  width: 40vw;
  font-family: Montserrat;

  position: relative;
  top: -48.5px;
  left: 162px;

  .values {
    display: flex;
    justify-content: flex-end;
  }

  p {
    font-size: 13px;
    line-height: 6px;
  }

  .usually {
    font-size: 18px;
    text-decoration: line-through;
  }

  .promotional {
    font-size: 18px;
    margin-left: 8px;
    color: #f69651;
  }
`;

export const ProductDetais = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
`;

export const Total = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: space-between;

  .total_info {
    p {
      font-size: 15px;
    }

    h1 {
      font-weight: bold;
    }
  }

  .total_values {
    text-align: end;

    p {
      font-size: 15px;
    }

    h1 {
      font-weight: bold;
      color: #f69651;
    }

    .arrow {
      outline: none;
      border: none !important;
      background-color: white;

      svg {
        margin-top: 25px;
        margin-bottom: 13px;
      }
    }
  }
`;

export const Paragraph = styled.p`
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 12px;
  text-transform: lowercase;

  color: rgba(0, 0, 0, 0.5);
`;

export const Paymment = styled.div`
  background: #ffffff;
  border-radius: 5px;
  margin-top: 8px;
  padding-left: 15px;
  height: 11.5vh;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  section {
    margin-left: 15px;
    width: 60vw;
    height: 7vh;
  }

  .master {
    background-color: #eaeaea;
    border-radius: 5px;
    height: 45px;
    width: 45px;
    display: flex;
    justify-content: center;
    svg {
      width: 11vw;
    }
  }

  .arrow {
    outline: none;
    border: none !important;
    background-color: white;
    svg {
      margin-left: 10px;
    }
  }
`;

export const Checkout = styled.div`
  .checkout-button {
    background-color: #f69651;
    outline: none;
    border: none !important;
    border-radius: 5px;

    color: white;
    font-size: 16px;
    font-weight: bold;
    font-style: normal;
    font-family: Montserrat;

    margin-top: 20px;
    width: 100%;
    height: 11.5vh;

    :hover {
      text-decoration-line: underline;
      cursor: pointer;
    }

    :active {
      background-color: #083f35;
    }
  }
`;
