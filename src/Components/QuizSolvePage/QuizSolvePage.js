import React from "react";
import styled from "styled-components";
import QuizForm from "./QuizForm";
import { TextButton } from "../Common/Buttons";

const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;

const TopBar = styled.div`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 50px;
  background-color: #000;
`;

const Content = styled.div`
  position: absolute;
  top: 50px;
  left: 0px;
  right: 0px;
  bottom: 50px;
  overflow: auto;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 50px;
  background-color: ${props => props.theme.color.primary};
`;

const BottomBarButton = styled(TextButton)`
  width: 100%;
  height: 100%;
`;

export default class QuizSolvePage extends React.Component {
  state = {
    questions: [
      { title: "sdsasd", answers: ["a", "b"], correctAnswer: "0" },
      { title: "qqqq", answers: ["a", "bb"], correctAnswer: "1" },
      { title: "wewe", answers: ["qwq", "ewe"], correctAnswer: "1" }
    ]
  };

  handleSubmit = values => {
    console.log(values);
  };

  handleCheck = () => {
    this.triggerSubmit();
  };

  bindToHandleSubmit = handleSubmit => {
    this.triggerSubmit = handleSubmit;
  };

  render() {
    return (
      <PageWrapper>
        <TopBar />
        <Content>
          <QuizForm
            questions={this.state.questions}
            onSubmit={this.handleSubmit}
            binder={this.bindToHandleSubmit}
          />
        </Content>
        <BottomBar>
          <BottomBarButton onClick={this.handleCheck} type="text">
            Check
          </BottomBarButton>
        </BottomBar>
      </PageWrapper>
    );
  }
}
