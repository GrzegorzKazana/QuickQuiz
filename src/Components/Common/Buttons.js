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
