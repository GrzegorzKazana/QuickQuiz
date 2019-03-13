import React from "react";
import styled from "styled-components";
import TextAreaAutosize from "react-autosize-textarea";

const InputActiveBar = styled.div`
  background-color: ${props =>
    props.error ? props.theme.color.error : props.theme.color.shade5};
  height: 2px;
  width: ${props => (props.readOnly ? "0%" : "100%")};
  margin: 0 auto;
  transition: width
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    background-color
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`};
`;

const Wrapper = styled.div`
  /* background: ${props => (props.readOnly ? "tranparent" : "#fff")}; */
  /* background-color: ${props =>
    props.readOnly ? "tranparent" : props.theme.color.shade2}; */
  padding: 4px 0px;
  border-radius: 2px 2px 2px 2px;
  -moz-border-radius: 2px 2px 2px 2px;
  -webkit-border-radius: 2px 2px 2px 2px;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props =>
      props.readOnly ? "transparent" : props.theme.color.shade1};
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  color: ${props => props.theme.color.shade5};
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  border: 0px;
  outline: none;
  font-size: ${props => props.fontSize};
`;

const StyledTextArea = styled(TextAreaAutosize)`
  background-color: transparent;
  color: ${props => props.theme.color.shade5};
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  border: 0px;
  outline: 0px;
  resize: none;
  padding: 8px 2px 0px 2px;
  min-height: 45px;

  ::placeholder {
    color: ${props => props.theme.color.shade5};
  }
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
