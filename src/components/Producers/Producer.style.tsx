import styled from 'styled-components';

export const Grid = styled.section`
  margin-top: 15px;
  display: flex;
  flex-direction: column;
`;

export const Producer = styled.article`
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 0 8px;
  padding: 8px 16px;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
`;

export const ProducerPhone = styled.a`
  margin-top: 16px;
  opacity: 0.6;
  display: inline-block;
`;

export const ProducerDetails = styled.div`
  margin: 16px;
`;
