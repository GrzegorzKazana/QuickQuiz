import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const TopBar = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: ${props => props.theme.sizing.navBarSize};
  background-color: ${props => props.theme.color.primaryDarkOpacity(0.7)};
`;

const TextBox = styled.div`
  float: left;
  height: 100%;
  padding: 0px 16px;
  font-size: 2rem;
  font-style: bold;
  color: #fff;
  cursor: pointer;
`;

const NavBar = props => (
  <TopBar>
    <TextBox onClick={() => props.history.push("/")}>LOREM IPSUM</TextBox>
  </TopBar>
);
export default withRouter(NavBar);
