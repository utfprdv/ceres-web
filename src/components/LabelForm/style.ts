import styled, { css } from 'styled-components';

interface LABELProps {
  isVisible: boolean;
}

export const LABEL = styled.label<LABELProps>`
  > div {
    margin-top: 15px;
    box-sizing: border-box;
    border-radius: 5px;
    padding-top: 3px;
    padding-right: 12px;
    padding-bottom: 5px;
    padding-left: 12px;
    border: 2px solid #80808000;

    ${props =>
      props.isVisible &&
      css`
        border: 2px solid #808080;
      `};

    input {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      color: #000000;

      width: 100%;
      border: none;
      background-color: #fde8dd;
      outline: none;
      height: 20px;
      margin: 0px auto;
    }
  }
`;

interface LABELHEADERProps {
  isInputFilled: boolean;
}

export const LABELHEADER = styled.div<LABELHEADERProps>`
  padding-top: 7px;
  padding-bottom: 7px;
  display: flex;

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    text-transform: lowercase;
    margin: auto 0px;
  }

  svg {
    max-width: 24px;
    margin: auto 0px;
  }

  ${props =>
    props.isInputFilled
      ? css`
          svg {
            height: auto;
            width: 16px;
          }
        `
      : css`
          svg {
            height: auto;
            width: 24px;
          }
        `};

  svg + p {
    padding-left: 10px;

    ${props =>
      props.isInputFilled
        ? css`
            font-size: 12px;
            line-height: 15px;
            color: #808080;
          `
        : css`
            font-size: 14px;
            line-height: 17px;
            color: #000000;
          `};
  }

  p + p {
    color: #808080;
    font-size: 12px;
    line-height: 15px;
    margin: auto 0px;
    margin-left: auto;
    margin-right: 0;
  }
`;
