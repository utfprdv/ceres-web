import styled from 'styled-components';

export const H1 = styled.label`
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-transform: lowercase;

  color: #0d4137;
`;

export const Header = styled.div`
  display: flex;

  div + div {
    margin-left: 17px;
  }
`;

export const NameAndStatusBar = styled.div`
  display: block;
  h1 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;

    color: #c4c4c4;
  }
`;

export const StatusBar = styled.div`
  display: flex;
  margin: 0px auto;
  margin-top: 6px;

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 500;
    font-size: 10px;
    line-height: 12px;

    color: #c4c4c4;
    margin: 0px auto;
  }

  div + p {
    margin-left: 17px;
  }
`;

export const Body = styled.div``;

export const HeaderBody = styled.div`
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-transform: lowercase;

    color: #0d4137;
  }

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-transform: lowercase;

    color: rgba(0, 0, 0, 0.5);
  }
`;

export const ItemDiv = styled.div`
  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-transform: lowercase;

    color: rgba(0, 0, 0, 0.5);
  }
`;

export const Notification = styled.div`
  position: absolute;
  background: #f69651;
  border-radius: 65px;
  width: 14px;
  height: 14px;
  margin-top: -6px;
  margin-left: 30px;

  h5 {
    padding-left: 5px;
    padding-top: 2px;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 12px;
    text-transform: lowercase;

    color: #ffffff;
  }
`;

export const MainContent = styled.div`
  > div {
    display: flex;
    width: 100%;

    ${ItemDiv} + ${ItemDiv} {
      margin-left: 30px;
    }
  }
`;
