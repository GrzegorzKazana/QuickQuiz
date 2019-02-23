import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: ${props => (props.open ? "block" : "none")};
`;

const Overlay = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  z-index: 0;
  opacity: 0.5;
`;

const ModalWindow = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 8px;
  min-width: 480px;
  max-width: 100%;
  max-height: 80vh;
  background-color: #fff;
  border-radius: 4px;
  z-index: 1;
`;

const Modal = ({ open, ...props }) => (
  <Wrapper open={open}>
    <Overlay />
    <ModalWindow>{props.children}</ModalWindow>
  </Wrapper>
);
export default Modal;
