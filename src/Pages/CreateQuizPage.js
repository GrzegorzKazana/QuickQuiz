import React from "react";
import styled from "styled-components";
import CreateQuestionForm from "../Components/Questions/CreateQuestionForm";
import QuestionPreview from "../Components/Questions/QuestionPreview";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

const CreateQuestionButton = styled.button`
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

  handleCreateQuestionSubmit = values => {
    console.log(values);
    this.setState(prevState => ({
      ...prevState,
      creatingQuestion: false,
      questions: [...prevState.questions, values]
    }));
  };

  handleEditQuestionSubmit = (index, values) => {
    this.setState(prevState => ({
      ...prevState,
      editedQuestion: "",
      questions: prevState.questions.map((q, idx) =>
        idx === index ? values : q
      )
    }));
  };

  handleEditQuestionCancel = () => {
    this.setState({ editedQuestion: "" });
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

  handleAddQuestionCancel = () => {
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.splice(-1, 1),
      editedQuestion: ""
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
            onSubmit={values => this.handleEditQuestionSubmit(index, values)}
            onCancel={this.handleEditQuestionCancel}
            readOnly={this.state.editedQuestion !== index}
            onEdit={() => this.handleEditExistingQuestion(index)}
            onDelete={() => this.handleDeleteExistingQuestion(index)}
          />
        ))}
        {/* {this.state.creatingQuestion && (
          <CreateQuestionForm
            index={this.state.questions.length + 1}
            onSubmit={this.handleCreateQuestionSubmit}
            onCancel={this.handleAddQuestionCancel}
          />
        )} */}
        {this.state.editedQuestion === "" && (
          <CreateQuestionButton onClick={this.handleAddQuestion}>
            Add question
          </CreateQuestionButton>
        )}
      </TemporaryWrapper>
    );
  }
}
