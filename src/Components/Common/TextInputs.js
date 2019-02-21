import React from "react";
import styled from "styled-components";
import TextAreaAutosize from "react-autosize-textarea";

const InputActiveBar = styled.div`
  opacity: 0.5;
  background: #4165f4;
  height: 2px;
  width: ${props => (props.readOnly ? "0%" : "100%")};
  margin: 0 auto;
  transition: width 0.2s;
`;

const Wrapper = styled.div`
  background: ${props => (props.readOnly ? "#fff" : "#f1f1f1")};
  padding: 4px 8px;
  border-radius: 8px 8px 8px 8px;
  -moz-border-radius: 8px 8px 8px 8px;
  -webkit-border-radius: 8px 8px 8px 8px;
  transition: background 0.2s;

  :hover {
    background: ${props => (props.readOnly ? "#fff" : "#e6e6e6")};
  }
`;

const StyledInput = styled.input`
  background-color: transparent;
  width: 100%;
  font-size: 2rem;
  font-family: inherit;
  border: 0px;
  outline: none;
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

export const SingleLineTextInput = ({ className, readOnly, ...inputProps }) => (
  <Wrapper className={className} readOnly={readOnly}>
    <StyledInput
      {...inputProps}
      readOnly={readOnly}
      spellCheck="false"
      type="text"
    />
    <InputActiveBar readOnly={readOnly} />
  </Wrapper>
);

export const MultiLineTextInput = ({ className, readOnly, ...inputProps }) => (
  <Wrapper className={className} readOnly={readOnly}>
    <StyledTextArea
      {...inputProps}
      readOnly={readOnly}
      spellCheck="false"
      type="text"
    />
    <InputActiveBar readOnly={readOnly} />
  </Wrapper>
);
