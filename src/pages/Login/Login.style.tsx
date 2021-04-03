import styled from 'styled-components'

export const BuildMain = styled.main`
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  header {
    height: 22vh;
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
`

export const Credenciais = styled.section`
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

  > span {
    margin-top: 1.3em;
    min-height: 15px;
    font-size: 15px;
    color: #f02849;
    text-align: justify;
    text-justify: inter-word !important;
  }
`

export const Requisicao = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
      margin-top: 5px;
      margin-bottom: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #000;
      background-color: #ffffff;
      font-weight: bold;

      div {
        margin-left: 1em;
        min-width: 70px;
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
`
