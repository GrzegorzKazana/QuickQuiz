import React from "react";
import styled from "styled-components";
import { TextButton } from "../Common/Buttons";
import QuizForm from "./QuizForm";

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
    creatingQuestion: false
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

  handleEditQuestionCancel = (index, values) => {
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
      questions: prevState.questions.filter(
        (question, index) => index !== delIndex
      )
    }));
  };

  handleAddQuestion = () => {
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.concat(questionInitialValues),
      editedQuestion: prevState.questions.length
    }));
  };

  render() {
    return (
      <PageWrapper>
        <TopBar />
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
          <BottomBarButton>Publish</BottomBarButton>
        </BottomBar>
      </PageWrapper>
    );
  }
}
export default QuizEditorPage;
