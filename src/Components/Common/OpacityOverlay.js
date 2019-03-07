import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  visibility: ${props => (props.open ? "visible" : "hidden")};
  z-index: 10;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, ${props => (props.open ? 0.5 : 0)});
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
`;

const OpacityOverlay = ({ open, children }) => (
  <Wrapper open={open}>{children}</Wrapper>
);
export default OpacityOverlay;
