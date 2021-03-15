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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;

  section {
    width: 100%;
  }

  .cartao {
    svg {
      min-width: 2em;
    }
  }

  .data-cvv {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .validade {
      margin-right: 6px;
      width: 48%;
    }

    .cvv {
      width: 50%;
    }
  }

  .telefone-nasc {
    display: flex;
    justify-content: space-around;
    align-items: center;

    .cellphone {
      margin-right: 6px;
      width: 48%;
    }

    .birthday {
      width: 50%;
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
  }
`;
