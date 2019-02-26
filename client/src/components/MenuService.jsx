import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const MenuService = () =>
  <StyledMenuService>
    <GlobalStyle />
      <StyledTrelloPlus>Trello+</StyledTrelloPlus>
      <Star>&#9734;</Star>
      <div>Personal</div>
      <div>Private</div>
      <div>user + any other users</div>
      <div>... Show Menu</div>
  </StyledMenuService>

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    margin: 0px;
    background-image: url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1365x2048/038fa5123fba6f29d3a22c8481c3add6/photo-1545072559-7d4800d1b871");
  }
`;

const StyledMenuService = styled.div`
  align-items: center;
  background: rgba(0,0,0,.24);
  color: white;
  display: flex;
  flex-direction: row;
  font-family: Helvetica Neue,Arial,Helvetica,sans-serif;
  height: 40px;
  margin-bottom: 8px;
  padding: 8px;
  width: 100%;
  > :nth-child(n) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledTrelloPlus = styled.div`
  border-radius: 3px;
  font-size: 18px;
  font-weight: 700;
  height: 32px;
  padding: 0px 8px;
  width: 70px;
  &:hover {
    background-color: rgba(0,0,0,.35);
  }
`;

const Star = styled.div`
  font-size: 12px;
  height: 26px;
  padding: 6px;
  width: 26px;
`


export default MenuService;