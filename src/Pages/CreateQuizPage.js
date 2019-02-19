import React from "react";
import styled from "styled-components";
import CreateQuestionForm from "../Components/Questions/CreateQuestionForm";
import QuestionPreview from "../Components/Questions/QuestionPreview";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

export default class CreateQuizPage extends React.Component {
  state = {
    questions: [
      {
        title: "asdfg",
        answers: ["a", "b", "c"],
        correctAnswer: "1"
      }
    ],
    editedQuestion: 0
  };

  handleCreateQuestionSubmit = values => {
    console.log(values);
    this.setState({ editedQuestion: "" });
  };

  handleEditExistingQuestion = index => {
    this.setState({ editedQuestion: index });
  };

  handleDeleteExistingQuestion = delIndex => {
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.filter(
        (question, index) => index !== delIndex
      )
    }));
  };

  render() {
    return (
      <TemporaryWrapper>
        {this.state.questions.map((question, index) =>
          this.state.editedQuestion === index ? (
            <CreateQuestionForm
              key={index}
              question={question}
              onSubmit={this.handleCreateQuestionSubmit}
            />
          ) : (
            <QuestionPreview
              key={index}
              question={question}
              onEdit={() => this.handleEditExistingQuestion(index)}
              onDelete={() => this.handleDeleteExistingQuestion(index)}
            />
          )
        )}
      </TemporaryWrapper>
    );
  }
}
