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
    border: 3px solid #4165f4;
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
    border: 5px solid #4165f4;
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    transition: transform 0.2s ease;
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

export const RadioButton = props => (
  <StyledRadioButtonInput {...props} type="radio" disabled={props.readOnly} />
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
  transition: background-color 0.2s ease;

  :hover {
    background-color: #e6e6e6;
  }

  svg {
    position: absolute;
    top: 15%;
    left: 15%;
    width: 70%;
    height: 70%;
    transition: transform 0.2s ease;
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
  border: 2px solid #4165f4;
  outline: 0px;
  background-color: #4165f4;
  border-radius: 4px;
  color: white;
  font: inherit;
  font-weight: 700;

  padding: 8px;
  transition: background-color, border 0.2s ease;

  :hover {
    background-color: #264ff2;
    border: 2px solid #264ff2;
  }
`;

const TextButtonSecondary = styled.button`
  border: 2px solid #4165f4;
  outline: 0px;
  background-color: #fff;
  border-radius: 4px;
  color: #4165f4;
  font: inherit;
  font-weight: 700;
  padding: 8px;
  transition: background-color 0.2s ease;

  :hover {
    background-color: rgba(65, 101, 244, 0.1);
  }
`;

const TextButtonSliced = styled.button`
  border: 2px dashed #a6a6a6;
  outline: 0px;
  background-color: #fff;
  border-radius: 4px;
  color: #a6a6a6;
  font: inherit;
  font-weight: 700;
  padding: 8px;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #f1f1f1;
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
