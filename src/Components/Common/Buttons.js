import React from "react";
import styled from "styled-components";

const StyledRadioButtonInput = styled.input`
  position: relative;
  margin: 0px;
  width: 20px;
  height: 20px;

  ::before {
    width: 20px;
    height: 20px;
    border-radius: 20px;
    top: 0px;
    left: 0px;
    position: absolute;
    background-color: #fff;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 3px solid ${props => props.color || props.theme.color.primary};
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
  }

  ::after {
    width: 10px;
    height: 10px;
    border-radius: 10px;
    top: 5px;
    left: 5px;
    position: absolute;
    background-color: #d1d3d1;
    content: "";
    display: inline-block;
    visibility: visible;
    border: 5px solid ${props => props.color || props.theme.color.primary};
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    transition: transform
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`};
    transform: scale(0);
  }

  ${props =>
    !props.readOnly &&
    `:hover::after {
    transform: scale(1);
  }`}

  :checked::after {
    transform: scale(1);
  }
`;

export const RadioButton = ({ readOnly, error, ...props }) => (
  <StyledRadioButtonInput
    {...props}
    type="radio"
    disabled={readOnly}
    color={error ? "#b00020" : ""}
  />
);

const LabelStyled = styled.label`
  display: flex;
  flex-direction: row;
  align-items: baseline;
`;

const TextContainer = styled.div`
  margin: 0px 0px 0px 8px;
  font-size: 2rem;
  width: 100%;
`;

export const LabeledRadioButton = ({ label, className, ...props }) => (
  <LabelStyled className={className}>
    <RadioButton {...props} />
    <TextContainer>{label}</TextContainer>
  </LabelStyled>
);

const StyledIconButton = styled.button`
  visibility: ${props => (props.readOnly ? "hidden" : "visible")};
  border: 0px;
  outline: 0px;
  background-color: #fff;
  width: ${props => props.size};
  height: ${props => props.size};
  border-radius: ${props => props.size};
  position: relative;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: #e6e6e6;
  }

  svg {
    position: absolute;
    top: 10%;
    left: 10%;
    width: 80%;
    height: 80%;
    transition: transform
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  }

  svg:hover {
    transform: scale(1.3);
  }
`;

export const IconButton = ({ icon, size = "20px", ...props }) => (
  <StyledIconButton {...props} size={size}>
    {icon}
  </StyledIconButton>
);

const TextButtonPrimary = styled.button`
  border: 2px solid ${props => props.theme.color.primary};
  outline: 0px;
  background-color: ${props => props.theme.color.primary};
  border-radius: 4px;
  color: #fff;
  font: inherit;
  font-weight: 700;

  padding: 8px;
  transition: background-color
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`},
    border
      ${props =>
        `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.primaryDark};
    border: 2px solid ${props => props.theme.color.primaryDark};
  }
`;

const TextButtonSecondary = styled.button`
  border: 2px solid ${props => props.theme.color.primary};
  outline: 0px;
  background-color: #fff;
  border-radius: 4px;
  color: ${props => props.theme.color.primary};
  font: inherit;
  font-weight: 700;
  padding: 8px;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.primaryLight};
  }
`;

const TextButtonSliced = styled.button`
  border: 2px dashed ${props => props.theme.color.grayDark};
  outline: 0px;
  background-color: #fff;
  border-radius: 4px;
  color: ${props => props.theme.color.grayDark};
  font: inherit;
  font-weight: 700;
  padding: 8px;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.grayLight};
  }
`;

export class TextButton extends React.Component {
  render() {
    const { variant } = this.props;
    switch (variant) {
      case "primary":
        return <TextButtonPrimary {...this.props} />;
      case "secondary":
        return <TextButtonSecondary {...this.props} />;
      case "sliced":
        return <TextButtonSliced {...this.props} />;
      default:
        return <TextButtonPrimary {...this.props} />;
    }
  }
}
