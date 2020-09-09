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
  padding: 10px 100px;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
  }
  svg {
    display: inline-block;
    position: absolute;
    left: 16px;
    margin-top: -10px;
    background-color: #f69651;
    border-radius: 5px;
    padding: 20px 0 0 20px;
    width: 80px;
    height: 80px;
  }
`;

export const ProducerPhone = styled.a`
  margin-top: 8px;
  opacity: 0.6;
  display: inline-block;
`;

export const ProducerDetails = styled.div`
  margin: 10px;
`;

export const ProducerIcon = styled.div`
display: block;
background-color: #f69651;
border-radius: 5px;
padding: 20px 0 0 12px;
width: 40px;
height: 60px;



`;