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
`;

interface LABELProps {
  isVisible: boolean;
}

export const LABEL = styled.label<LABELProps>`
  > div {
    box-sizing: border-box;
    border-radius: 5px;
    padding-top: 7px;
    padding-right: 12px;
    padding-bottom: 12px;
    padding-left: 12px;
    border: 2px solid #80808000;

    ${props =>
      props.isVisible &&
      css`
        border: 2px solid #808080;
      `};

    div {
      margin-top: 5px;
      p {
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 15px;

        text-transform: lowercase;
        padding-left: 10px;

        color: #808080;
      }

      display: flex;

      svg {
        height: 20px;
        width: 20px;
      }
    }

    input {
      width: 100%;
      border: none;
      background-color: #fde8dd;
      outline: none;
      height: 20px;
      margin: 0px auto;
    }
  }
`;
