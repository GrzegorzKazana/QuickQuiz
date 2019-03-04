import React from "react";
import styled from "styled-components";
import { TextButton } from "../Common/Buttons";
import QuizForm from "./QuizForm";
import PublishedModal from "./PublishedModal";
import NavBar from "../Common/NavBar";
import { withRouter } from "react-router-dom";
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

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

class QuizEditorPage extends React.Component {
  state = {
    titleFocused: true,
    title: "",
    questions: [questionInitialValues],
    editedQuestion: 0,
    creatingQuestion: false,
    publishedModalOpen: false,
    publishingQuiz: false
  };

  handleQuestionSubmit = (index, values) => {
    this.setState(prevState => ({
      ...prevState,
      editedQuestion: -1,
      questions: prevState.questions.map((q, idx) =>
        idx === index ? values : q
      )
    }));
  };

  handleEditQuestionCancel = index => {
    if (this.state.questions[index] === questionInitialValues) {
      this.setState(prevState => ({
        ...prevState,
        questions: prevState.questions.slice(0, -1),
        editedQuestion: -1
      }));
    } else {
      this.setState({ editedQuestion: -1 });
    }
  };

  handleEditExistingQuestion = index => {
    this.setState({ editedQuestion: index });
  };

  handleDeleteExistingQuestion = delIndex => {
    if (this.state.questions.length === 1 && delIndex === 0) {
      this.setState({ questions: [questionInitialValues], editedQuestion: 0 });
      return;
    }
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.filter((_, index) => index !== delIndex)
    }));
  };

  handleAddQuestion = () => {
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.concat(questionInitialValues),
      editedQuestion: prevState.questions.length
    }));
  };

  handlePublish = () => {
    this.setState({ publishedModalOpen: true, publishingQuiz: true });
    console.log(this.state.title);
    console.log(this.state.questions);
  };

  handlePublishOk = () => {
    this.setState({ publishedModalOpen: false });
    this.props.history.push("/");
  };

  handleSolveQuiz = () => {};

  render() {
    return (
      <PageWrapper>
        <NavBar />
        <Content>
          <QuizForm
            title={this.state.title}
            onTitleChange={e => this.setState({ title: e.target.value })}
            onTitleFocus={() => this.setState({ titleFocused: true })}
            onTitleBlur={() => this.setState({ titleFocused: false })}
            titleReadOnly={!this.state.titleFocused}
            questions={this.state.questions}
            onQuestionSubmit={this.handleQuestionSubmit}
            onQuestionCancel={this.handleEditQuestionCancel}
            onQuestionEdit={this.handleEditExistingQuestion}
            onQuestionDelete={this.handleDeleteExistingQuestion}
            currentlyEdittedQuestion={this.state.editedQuestion}
            onAddQuestion={this.handleAddQuestion}
          />
        </Content>
        <BottomBar>
          <BottomBarButton onClick={this.handlePublish}>
            Publish
          </BottomBarButton>
        </BottomBar>
        {this.state.publishingQuiz && <SpinnerOverlay />}
        <PublishedModal
          open={this.state.publishedModalOpen}
          onSolve={this.handleSolveQuiz}
          onOk={this.handlePublishOk}
        >
          asdasd
        </PublishedModal>
      </PageWrapper>
    );
  }
}
export default withRouter(QuizEditorPage);
