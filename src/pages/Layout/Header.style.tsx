import styled from 'styled-components';

export const HeaderUI = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #0d4137;
  color: #fff;
  padding: 10px 16px;
`;

export const Logo = styled.h1`
  color: #fff;
  font-weight: 900;
  font-size: 24px;
`;

export const ListaLink = styled.span`
  color: #fff;
`;

export const ListaCount = styled.span`
  background: #fde8dd;
  color: #0d4137;
  font-size: 12px;
  border-radius: 100%;
  width: 30px;
  height: 30px;
  padding: 2px 5.5px;
  margin-left: 8px;
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: -10px;
  appearance: none;
  background: transparent;
  border: 0;
  color: #fff;
`;
