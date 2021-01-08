import styled from 'styled-components';

export const BuildHeader = styled.header`
  display: flex;
  justify-content: center;
  border: 1px solid red;
  height: 10vh;
  background-color: green;
  padding-left: 5em;
`;

export const BuildMain = styled.main`
  height: 30vh;
  display: flex;
  justify-content: center;
  border: 1px solid red;
  flex-direction: column;
  flex-wrap: wrap;

  .email {
    width: 27.5em;
  }

  .senha {
    width: 27.5em;
  }

  .button {
    display: flex;
    justify-content: center;
    margin: 1em auto;
    border: 1px solid red;
  }

  .forgotPassword {
    display: flex;
    justify-content: center;
  }
`;
