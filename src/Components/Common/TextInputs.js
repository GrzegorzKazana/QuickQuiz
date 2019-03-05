import React from "react";
import styled from "styled-components";
import TextAreaAutosize from "react-autosize-textarea";

const InputActiveBar = styled.div`
  opacity: 0.5;
  background-color: ${props =>
    props.error ? props.theme.color.error : props.theme.color.primary};
  height: 2px;
  width: ${props => (props.readOnly ? "0%" : "100%")};
  margin: 0 auto;
  transition: width
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
`;

const Wrapper = styled.div`
  background: ${props => (props.readOnly ? "tranparent" : "#fff")};
  padding: 4px 8px;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props =>
      props.readOnly ? "transparent" : props.theme.color.grayLight};
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  border: 0px;
  outline: none;
  font-size: ${props => props.fontSize};
`;

const StyledTextArea = styled(TextAreaAutosize)`
  background-color: transparent;
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  border: 0px;
  outline: 0px;
  resize: none;
  padding: 8px 2px 0px 2px;
  min-height: 45px;
`;

export const SingleLineTextInput = ({
  className,
  readOnly,
  error,
  ...inputProps
}) => (
  <Wrapper className={className} readOnly={readOnly}>
    <StyledInput
      {...inputProps}
      readOnly={readOnly}
      spellCheck="false"
      type="text"
    />
    <InputActiveBar readOnly={readOnly} error={error} />
  </Wrapper>
);

export const MultiLineTextInput = ({
  className,
  readOnly,
  error,
  ...inputProps
}) => (
  <Wrapper className={className} readOnly={readOnly}>
    <StyledTextArea
      {...inputProps}
      readOnly={readOnly}
      spellCheck="false"
      type="text"
    />
    <InputActiveBar readOnly={readOnly} error={error} />
  </Wrapper>
);
