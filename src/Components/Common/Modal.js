import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: ${props => (props.open ? "block" : "none")};
`;

const Overlay = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 10;
  opacity: ${props => (props.open ? 0.5 : 0)};
  transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
`;

export const Modal = styled.div`
  padding: 8px;
  width: 600px;
  max-width: 90%;
  background-color: ${props => props.theme.color.shade05};
  border-radius: 4px;
  z-index: 11;
`;

export const ModalOverlay = ({ open, ...props }) => (
  <Wrapper open={open}>
    <Overlay open={open} />
    <Modal>{props.children}</Modal>
  </Wrapper>
);
