import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const MenuService = () =>
  <StyledMenuService>
    <GlobalStyle />
    hello
  </StyledMenuService>

const GlobalStyle = createGlobalStyle`
  body {
    background: blue;
    height: 100vh;
    margin: 0px;
  }
`;

const StyledMenuService = styled.div`
  background: rgba(0,0,0,.24);
  display: flex;
  flex-direction: row;
  height: 40px;
  margin-bottom: 8px;
  width: 100%;
`;



export default MenuService;