import styled from 'styled-components';

export const Container = styled.section``;

interface HeaderProps {
  isDelivery: boolean;
}

export const Header = styled.header<HeaderProps>`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  max-width: 220px;

  > div {
    width: 2px;
    height: 72px;
    background-color: #0d4137;
    border-color: #0d4137;
    border-radius: 12px;
  }

  > section {
    margin-left: auto;
    margin-right: auto;
    max-width: 80px;
    color: rgba(0, 0, 0, 0.5);

    > section {
      > svg {
        width: 100%;
        margin-left: auto;
        margin-right: auto;

        > path {
          fill: rgba(0, 0, 0, 0.5);
        }
      }

      > div {
        position: relative;
        left: 56px;
        bottom: 55px;

        width: 16px;
        height: 16px;
        background: none;
        border-radius: 135px;
      }
    }

    > h2 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      text-transform: lowercase;
    }

    &${props => (props.isDelivery ? '.delivery' : ':not(.delivery)')} {
      color: rgba(13, 65, 55, 1);

      > section {
        svg path {
          fill: rgba(13, 65, 55, 1);
        }

        div {
          background-color: #f69651;
        }
      }
    }
  }
`;

interface SectionProps {
  isDelivery: boolean;
}

export const Section = styled.section<SectionProps>`
  width: 100%;
  background: #ffffff;
  border-radius: 5px;
  padding-top: 20px;
  padding-bottom: 20px;
  display: block;

  > ${props => (props.isDelivery ? ':not(.delivery)' : '.delivery')} {
    display: none;
  }
`;

export const TakeAwaySection = styled.section`
  padding-left: 20px;
  padding-right: 20px;

  div {
    > h1 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      color: #0d4137;
    }

    > p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      text-transform: lowercase;
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

export const DeliverySection = styled.section`
  > header {
    padding-left: 20px;
    padding-right: 20px;

    > h1 {
      font-family: Montserrat;
      font-style: normal;
      font-weight: bold;
      font-size: 16px;
      line-height: 20px;
      text-transform: lowercase;
      color: #0d4137;
    }

    > p {
      font-family: Montserrat;
      font-style: normal;
      font-weight: normal;
      font-size: 10px;
      line-height: 12px;
      text-transform: lowercase;
      color: rgba(0, 0, 0, 0.5);
    }
  }

  > section {
    div {
      padding-top: 9px;
      padding-bottom: 2px;
      &:hover {
        background-color: rgba(0, 0, 0, 0.1);
      }

      > h3 {
        margin-left: 20px;
        margin-right: 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        text-transform: lowercase;
        color: #0d4137;
      }

      > p {
        margin-left: 20px;
        margin-right: 20px;
        font-family: Montserrat;
        font-style: normal;
        font-weight: normal;
        font-size: 10px;
        line-height: 12px;
        text-transform: lowercase;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  > footer {
    margin-top: 20px;

    > svg {
      width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
