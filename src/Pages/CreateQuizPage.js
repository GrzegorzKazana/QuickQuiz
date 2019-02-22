import React from "react";
import styled from "styled-components";
import CreateQuestionForm from "../Components/Questions/CreateQuestionForm";
import { TextButton } from "../Components/Common/Buttons";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

const CreateQuestionButton = styled(TextButton)`
  width: 100%;
`;

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

export default class CreateQuizPage extends React.Component {
  state = {
    questions: [questionInitialValues],
    editedQuestion: 0,
    creatingQuestion: false
  };

  handleQuestionSubmit = (index, values) => {
    this.setState(prevState => ({
      ...prevState,
      editedQuestion: "",
      questions: prevState.questions.map((q, idx) =>
        idx === index ? values : q
      )
    }));
  };

  handleEditQuestionCancel = (index, values) => {
    if (this.state.questions[index] === questionInitialValues) {
      console.log("edit canceled");
      this.setState(prevState => ({
        ...prevState,
        questions: prevState.questions.slice(0, -1),
        editedQuestion: ""
      }));
    } else {
      this.setState({ editedQuestion: "" });
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
      <TemporaryWrapper>
        {this.state.questions.map((question, index) => (
          <CreateQuestionForm
            key={index}
            index={index + 1}
            question={question}
            onSubmit={values => this.handleQuestionSubmit(index, values)}
            onCancel={values => this.handleEditQuestionCancel(index, values)}
            readOnly={this.state.editedQuestion !== index}
            onEdit={() => this.handleEditExistingQuestion(index)}
            onDelete={() => this.handleDeleteExistingQuestion(index)}
          />
        ))}
        {this.state.editedQuestion === "" && (
          <CreateQuestionButton
            onClick={this.handleAddQuestion}
            variant="sliced"
          >
            Add question
          </CreateQuestionButton>
        )}
      </TemporaryWrapper>
    );
  }
}
