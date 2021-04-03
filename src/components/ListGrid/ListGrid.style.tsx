import styled from 'styled-components'

export const Grid = styled.section`
  margin-top: 15px;
`

export const RemoveListItem = styled.button`
  color: red;
  appearance: none;
  border: 0;
  background: 0;
  margin: 8px;
`

export const Product = styled.article`
  background-color: #ffffff;
  width: 100%;
  height: auto;
  display: flex;
  border-radius: 5px;
  margin: 0 0 8px;
  align-items: center;
  justify-content: space-between;

  img {
    border-radius: 5px 0 0 5px;
    width: 80px;
    height: 60px;
    object-fit: cover;
    display: block;
  }

  .nameProduct {
    width: 100vw;
  }

  h3 {
    margin-left: 10px;
  }
`
