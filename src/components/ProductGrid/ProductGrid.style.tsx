import styled from 'styled-components'

export const Grid = styled.section`
  margin-top: 15px;
  column-count: 2;
  column-gap: 8px;
`

export const Product = styled.article`
  background-color: #ffffff;
  border-radius: 5px;
  display: inline-block;
  margin: 0 0 8px;

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
`

export const ProductCount = styled.span`
  display: inline-block;
  background-color: #f69651;
  font-size: 10px;
  border-radius: 5px;
  padding: 4px 12px 4px 12px;
  color: #ffffff;
  margin-top: 16px;
`

export const ProductDetails = styled.div`
  margin: 16px;
`
