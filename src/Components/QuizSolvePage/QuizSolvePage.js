import React from "react";
import styled from "styled-components";
import QuizForm from "./QuizForm";
import { TextButton } from "../Common/Buttons";
import ResultsModal from "./ResultsModal";
import NavBar from "../Common/NavBar";
import { SpinnerOverlay } from "../Common/Spinners";
import { getQuiz } from "../../ApiConnections/MockApi";
import { withRouter } from "react-router-dom";
import QuizNotFoundModal from "./QuizNotFoundModal";

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

class QuizSolvePage extends React.Component {
  state = {
    title: "quiz title",
    questions: [
      {
        question_text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
        answers: [
          { answer_id: 1, answer_text: "a" },
          { answer_id: 2, answer_text: "b" }
        ],
        correct: 1
      },
      {
        question_text: "qqqq",
        answers: [
          { answer_id: 3, answer_text: "aa" },
          { answer_id: 4, answer_text: "bb" }
        ],
        correct: 3
      },
      {
        question_text: "wewe",
        answers: [
          { answer_id: 5, answer_text: "aaa" },
          { answer_id: 6, answer_text: "bbb" }
        ],
        correct: 6
      }
    ],
    initialValues: {},
    resultPercent: 0,
    checkingQuestions: false,
    resultsModalOpen: false,
    fetchingQuestions: true,
    loadedQuestions: false
  };

  constructor(props) {
    super(props);
    this.state.questions = [];
    this.state.initialValues = {
      answers: this.state.questions.map(_ => "")
    };
    this.state.quiz_hash = props.match.params.quiz_hash;

    getQuiz(this.state.quiz_hash)
      .then(data =>
        this.setState({
          title: data.title,
          questions: data.questions,
          fetchingQuestions: false,
          loadedQuestions: true
        })
      )
      .catch(err => {
        console.log("failed to fetch questions", err);
        this.setState({ fetchingQuestions: false, loadedQuestions: false });
      });
  }

  handleSubmit = (values, actions) => {
    console.log(values);
    this.resetForm = actions.resetForm;
    this.setState({
      checkingQuestions: true,
      resultsModalOpen: true,
      resultPercent:
        values.answers.filter(
          (answer, index) =>
            parseInt(answer) === this.state.questions[index].correct
        ).length / values.answers.length
    });
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

  handleGoHome = () => this.props.history.push("/");

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
          resultPercent={this.state.resultPercent}
          onRetry={this.handleRetry}
          onViewQuiz={this.handleViewQuestionsAfterResults}
        />
        <QuizNotFoundModal
          open={!this.state.fetchingQuestions && !this.state.loadedQuestions}
          onGoBack={this.handleGoHome}
        />
      </PageWrapper>
    );
  }
}
export default withRouter(QuizSolvePage);
