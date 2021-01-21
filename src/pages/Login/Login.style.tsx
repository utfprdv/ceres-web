import styled from 'styled-components';

export const BuildMain = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  header {
    height: 25vh;
    width: 60vw;
    display: flex;
    justify-content: center;
    align-items: center;

    div {
      margin-left: 0.5em;

      svg {
        width: 86px;
        height: 84px;

        path {
          fill: #0d4137;
        }
      }
    }
  }

  * {
    font-family: 'Montserrat', sans-serif;
  }
`;

export const Credenciais = styled.section`
  height: 36vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;

  section {
    width: 100%;

    svg {
      width: 1.3em;
    }
  }
`;

export const Requisicao = styled.section`
  height: 12vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 1.3em;

  .button {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1.3em auto;

    button {
      border: none;
      border-radius: 0.5em;
      height: 3.5em;
      width: 91.5vw;
      margin-top: 1em;
      outline: none;
      text-transform: capitalize;

      :hover {
        text-decoration-line: underline;
        cursor: pointer;
      }
    }

    .first {
      color: white;
      background-color: #0d4137;
      font-weight: bold;

      :hover {
        background-color: #063129;
      }
      :active {
        background-color: #083f35;
      }
    }

    .second {
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      background-color: #ffffff;
      font-weight: bold;

      div {
        margin-left: 1em;
      }
    }
  }

  .signUp a {
    color: #333;
    font-size: 14px;
    :hover {
      text-decoration-line: underline;
      color: #e55d45;
    }
  }
`;
