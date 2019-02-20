import React from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

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

  :hover::after {
    transform: scale(1);
  }

  :checked::after {
    transform: scale(1);
  }
`;

export class RadioButton extends React.Component {
  render() {
    return <StyledRadioButtonInput {...this.props} type="radio" />;
  }
}

const StyledButton = styled.button`
  border: 0px;
  outline: 0px;
  background-color: #fff;
  width: 20px;
  height: 20px;
  border-radius: 20px;
  position: relative;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #e6e6e6;
  }

  svg {
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    transition: transform 0.2s ease;
  }

  svg:hover {
    transform: scale(1.3);
  }
`;

export class IconButton extends React.Component {
  render() {
    console.log(this.props.icon);
    return <StyledButton {...this.props}>{this.props.icon}</StyledButton>;
  }
}
