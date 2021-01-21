import styled, { css } from 'styled-components';

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
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: #c4c4c4;
  }
`;

interface StatusBarProps {
  progress: number;
  max: number;
}

export const StatusBar = styled.div<StatusBarProps>`
  display: flex;
  margin: 0px auto;
  margin-top: 6px;

  > div {
    margin-top: 2px;
    margin-right: 8px;
    width: 100%;
    max-width: 100px;
    height: 5px;

    background: #ffffff;
    border-radius: 7px;

    > div {
      ${props =>
        props.progress &&
        css`
          width: ${props.progress}%;
        `};
      max-width: 100px;
      height: 5px;

      background: #f69651;
      border-radius: 7px;
    }
  }

  span.progressStatus {
    display: flex;

    p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: 500;
      font-size: 10px;
      line-height: 12px;

      color: #c4c4c4;
      margin: 0px auto;
    }

    .progress:after {
      ${props =>
        props.progress &&
        css`
            content: '${props.progress}';
          `};
    }
    .max:after {
      ${props =>
        props.max &&
        css`
            content: '${props.max}';
          `};
    }
  }

  div + p {
    margin-left: 17px;
  }
`;

export const Body = styled.div`
  margin-top: 30px;
  margin-left: 20px;
  margin-right: 20px;
`;

export const HeaderBody = styled.div`
  h2 {
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
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
  width: 100%;
  margin: auto;
  margin-top: 22px;

  > div {
    display: flex;
    margin: auto;

    > a {
      margin: auto;
    }
  }
`;
