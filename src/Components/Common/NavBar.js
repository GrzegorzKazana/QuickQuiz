import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";

const TopBar = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: ${props => props.theme.sizing.navBarSize};
  background-color: ${props => props.theme.color.shade0};
`;

const TextBox = styled.div`
  float: left;
  height: 100%;
  line-height: 100%;
  padding: auto 16px;
  font-style: bold;
  font-size: calc(${props => props.theme.sizing.navBarSize} - 8px);
  font-family: ${props => props.theme.typography.specialFont};
  color: ${props => props.theme.color.shade5};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBar = props => (
  <TopBar>
    <TextBox onClick={() => props.history.push("/")}>QUICKQUIZ</TextBox>
  </TopBar>
);
export default withRouter(NavBar);
