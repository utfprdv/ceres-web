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

export const FORM = styled.form`
  display: block;
  margin-top: 30px;

  button[type='submit'] {
    position: fixed;
    top: 92%;

    border: none;
    background-color: #f69651;
    width: 100%;
    height: 50px;

    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    text-transform: lowercase;

    color: #ffffff;
    padding-left: -16px;
    margin-left: -16px;
  }
`;

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
  display: flex;

  p {
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    text-transform: lowercase;
  }

  svg {
    max-width: 24px;
    padding-bottom: 15px;
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
    margin-left: auto;
    margin-right: 0;
  }
`;

export const DIV = styled.div`
  .next {
    display: none;
  }
  margin-bottom: 60px;
`;
