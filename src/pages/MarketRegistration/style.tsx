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

export const FORM = styled.form`
  display: block;
  margin-top: 30px;

  button[type='submit'] {
    position: fixed;
    position: fixed;
    bottom: 0;
    right: 0;

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
  }
`;

export const DIV = styled.div`
  .next {
    display: none;
  }
  margin-bottom: 60px;
`;
