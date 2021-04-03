import styled from 'styled-components'
// import Skeleton from "react-loading-skeleton"

export const GridLoading = styled.section`
  margin-top: 15px;
  column-count: 2;
  column-gap: 8px;
`

export const ProductLoading = styled.article`
  background-color: #ffff;
  border-radius: 5px;
  display: inline-block;
  margin: 0 0 8px;

  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
`

export const ProductCountLoading = styled.span`
  display: inline-block;
  font-size: 10px;
  border-radius: 5px;
  padding: 4px 8px 4px 4px;
  margin-top: 4px;
`

export const ProductDetailsLoading = styled.div`
  margin: 16px;
`

export const GridListLoading = styled.section`
  margin-top: 15px;
`

export const ProductListLoading = styled.article`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px;
  margin: 0 0 8px;
  align-items: center;
  justify-content: space-between;

  .nameProduct {
    width: 120px;
    margin-left: -120px;
  }

  .removeItem {
    width: 30px;
    padding: 0px 10px 0px 0px;
  }
`
