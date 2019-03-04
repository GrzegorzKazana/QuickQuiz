import React from "react";
import styled from "styled-components";
import QuizForm from "./QuizForm";
import { TextButton } from "../Common/Buttons";
import ResultsModal from "./ResultsModal";
import NavBar from "../Common/NavBar";
import { SpinnerOverlay } from "../Common/Spinners";

const PageWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Content = styled.div`
  position: absolute;
  top: ${props => props.theme.sizing.navBarSize};
  left: 0px;
  right: 0px;
  bottom: ${props => props.theme.sizing.navBarSize};
  overflow: auto;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: ${props => props.theme.sizing.navBarSize};
  background-color: ${props => props.theme.color.primary};
`;

const BottomBarButton = styled(TextButton)`
  width: 100%;
  height: 100%;
`;

export default class QuizSolvePage extends React.Component {
  state = {
    questions: [
      {
        title:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        answers: ["a", "b"],
        correctAnswer: "0"
      },
      { title: "qqqq", answers: ["a", "bb"], correctAnswer: "1" },
      { title: "wewe", answers: ["qwq", "ewe"], correctAnswer: "1" }
    ],
    initialValues: {},
    checkingQuestions: false,
    resultsModalOpen: false,
    fetchingQuestions: true,
    loadedQuestions: false
  };

  constructor(props) {
    super(props);
    this.state.initialValues = {
      answers: this.state.questions.map(_ => "")
    };
    this.state.quiz_code = props.match.params.quiz_code;
  }

  handleSubmit = (values, actions) => {
    console.log(values);
    this.resetForm = actions.resetForm;
    this.setState({ checkingQuestions: true, resultsModalOpen: true });
  };

  bindToHandleSubmit = handleSubmit => {
    this.triggerSubmit = handleSubmit;
  };

  handleViewQuestionsAfterResults = () => {
    this.setState({ resultsModalOpen: false });
  };

  handleRetry = () => {
    this.resetForm(this.state.initialValues);
    this.setState({ checkingQuestions: false, resultsModalOpen: false });
  };

  render() {
    return (
      <PageWrapper>
        <NavBar />
        <Content>
          <QuizForm
            questions={this.state.questions}
            initialValues={this.state.initialValues}
            checkingQuestions={this.state.checkingQuestions}
            onSubmit={this.handleSubmit}
            binder={this.bindToHandleSubmit}
          />
        </Content>
        <BottomBar>
          <BottomBarButton onClick={() => this.triggerSubmit()} type="text">
            Check
          </BottomBarButton>
        </BottomBar>
        {this.state.fetchingQuestions && <SpinnerOverlay />}
        <ResultsModal
          open={this.state.resultsModalOpen}
          onRetry={this.handleRetry}
          onViewQuiz={this.handleViewQuestionsAfterResults}
        />
      </PageWrapper>
    );
  }
}
