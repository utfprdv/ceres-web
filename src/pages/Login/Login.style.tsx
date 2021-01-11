import styled from 'styled-components';

export const BuildMain = styled.main`
  height: 40vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;

  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Credenciais = styled.section`
  height: 17vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .section-email {
    width: 85vw;
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    margin-bottom: 0.7em;
    box-shadow: 0.3em 0.3em 0.5em rgba(102, 99, 96, 0.267);
    border-radius: 0.3em;
    background-color: white;
  }

  .email {
    font-family: 'Montserrat', sans-serif;
    width: 75vw;
    height: 6.5vh;
    padding-left: 1.3em;
    outline: none;
    border: none;
  }

  .section-senha {
    /* svg path {
      stroke: blue;
    }  */
    width: 85vw;
    display: flex;
    align-items: center;
    padding-left: 0.5em;
    box-shadow: 0.3em 0.3em 0.5em rgba(102, 99, 96, 0.267);
    border-radius: 0.3em;
    background-color: white;
  }

  .senha {
    width: 75vw;
    height: 6.5vh;
    padding-left: 1.3em;
    outline: none;
    border: none;
  }
`;

export const Requisicao = styled.section`
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1em;

  .button {
    width: 85%;
    display: flex;
    justify-content: space-around;
    margin: 1em auto;

    button {
      border: none;
      border-radius: 2em;
      color: white;
      height: 2.3em;
      width: 11em;
      outline: none;

      :hover {
        opacity: 0.8;
        text-decoration-line: underline;
        cursor: pointer;
      }
    }

    .first {
      background-color: #e55d45;
    }

    .second {
      background-color: #0d4137;
    }
  }

  .forgotPassword a {
    color: #333;
    :hover {
      text-decoration-line: underline;
      color: #e55d45;
    }
  }
`;
