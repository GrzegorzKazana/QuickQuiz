import React from "react";
import styled from "styled-components";

export const Spinner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  :after {
    content: " ";
    display: block;
    width: 64px;
    height: 64px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: #fff transparent #fff transparent;
    animation: lds-dual-ring 1.2s linear infinite;
  }

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerWrapper = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000;
  opacity: 0.6;
  transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
`;
export const SpinnerOverlay = () => (
  <SpinnerWrapper>
    <Spinner />
  </SpinnerWrapper>
);
