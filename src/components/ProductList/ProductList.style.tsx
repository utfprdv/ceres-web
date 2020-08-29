import styled from 'styled-components';

export const List = styled.section`
  margin-top: 15px;
  `;
  
  export const Product = styled.article`
  height: 11.6vh;
  background-color: #ffffff;
  border-radius: 5px;
  margin: 0 0 8px;
  display: flex;
  justify-content: flex start;
  align-items: center;

  .picture {
    width: 20vw;
    margin-right: 10px;
  }
  
  img {
    border-radius: 5px;
    width: 100%;
    margin-top: 2px; 
  }
  
  .title {
    width: 60%;
    height: 10vh;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    margin-top: 7px;
  }

  h3 {
    margin-bottom: 2px;
  }
  
  h4 {
    height: 3vh;
    width: 15vw;
    font-size: 11px;
    margin-left: 2px;
  }
`;