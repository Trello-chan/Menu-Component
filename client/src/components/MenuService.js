import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';
const styled = window.styled;

let letter = String.fromCharCode(Math.floor(65 + Math.random() * 26));

const MenuService = () =>
  <StyledMenuService>
    <GlobalStyle />
      <StyledTrelloPlus>Trello+</StyledTrelloPlus>
      <Star>&#9734;</Star>
      <Divider />
      <StyledPersonal>Personal</StyledPersonal>
      <Divider />
      <StyledPersonal><span>&#128274;</span> Private</StyledPersonal>
      <Divider />
      <div><StyledMember>{letter}</StyledMember> <StyledMember>+</StyledMember> </div>
      <StyledShowMenu>... <u>Show Menu</u></StyledShowMenu>
  </StyledMenuService>

const GlobalStyle = styled.createGlobalStyle`
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
  border-radius: 3px;
  font-size: 12px;
  height: 20px;
  padding: 6px;
  width: 20px;
  &:hover {
    background-color: rgba(0,0,0,.35);
  }
`;

const Divider = styled.div`
  border-left: 1px solid hsla(0,0%,100%,.2);
  height: 16px;
  margin: 0px 6px;
`;

const StyledPersonal = styled.div`
  border-radius: 3px;
  font-size: 14px;
  height: 32px;
  padding: 0px 6px;
  min-width: 54px;
  &:hover {
    background-color: rgba(0,0,0,.35);
  }
  > span {
    font-size: 12px;
    height: 20px;
    padding: 6px 6px 6px 0px;
    width: 20px;
  }
`;

let colorCodeOne = Math.floor(Math.random() * 256);
let colorCodeTwo = Math.floor(Math.random() * 256);
let colorCodeThree = Math.floor(Math.random() * 256);

const StyledMember = styled.div`
  background-color: rgba(${colorCodeOne}, ${colorCodeTwo}, ${colorCodeThree}, 1);
  border-radius: 50%;
  color: black;
  font-size: 12px;
  font-weight: 700;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0px 4px;
  &:hover {
    background-color: rgba(${colorCodeOne}, ${colorCodeTwo}, ${colorCodeThree}, .55);
  }
`;

const StyledShowMenu = styled.div`   
  border-radius: 3px; 
  font-size: 14px;
  height: 28px;
  margin-left: auto;
  margin-right: 20px;
  padding: 0px 8px;
  &:hover {
    background-color: rgba(0,0,0,.35);
  }
  > u { 
    margin-left: 10px;
  }
`;


export default MenuService;