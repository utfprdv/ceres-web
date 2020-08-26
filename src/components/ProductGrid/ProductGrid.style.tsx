import styled from 'styled-components';

export const Grid = styled.section`
  margin-top: 15px;
  column-count: 2;
  column-gap: 8px;
`;

export const Product = styled.article`
  background-color: #ffffff;
  border-radius: 5px;
  display: inline-block;
  margin: 0 0 8px;

  img {
    border-radius: 5px;
    width: 100%;
  }

  h3 {
    padding: 15px 15px 5px 15px;
  }

  h4 {
    display: inline-block;
    background-color: #f69651;
    font-size: 10px;
    border-radius: 5px;
    margin: 0 15px 25px 15px;
    padding: 2px 5px 2px 5px;
  }
`;
