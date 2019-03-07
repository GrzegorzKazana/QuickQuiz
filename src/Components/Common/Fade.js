import React from "react";
import styled from "styled-components";
import { Transition } from "react-transition-group";

const ContentWrapper = styled.div`
  transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)};
`;

const Fade = props => (
  <Transition in={true} appear={true} timeout={0}>
    {state => {
      // console.log(state);
      return <ContentWrapper state={state}>{props.children}</ContentWrapper>;
    }}
  </Transition>
);
export default Fade;
