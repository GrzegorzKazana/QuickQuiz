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

export default class CreateQuizPage extends React.Component {
  state = {
    questions: [
      // {
      //   title: "asdfg",
      //   answers: ["a", "b", "c"],
      //   correctAnswer: "1"
      // }
    ],
    editedQuestion: "",
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
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.filter(
        (question, index) => index !== delIndex
      )
    }));
  };

  handleAddQuestion = () => {
    this.setState({ creatingQuestion: true });
  };

  handleAddQuestionCancel = () => {
    this.setState({ creatingQuestion: false });
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
          // <React.Fragment>
          //   {this.state.editedQuestion === index ? (
          //     <CreateQuestionForm
          //       key={index}
          //       question={question}
          //       onSubmit={values =>
          //         this.handleEditQuestionSubmit(index, values)
          //       }
          //       onCancel={this.handleEditQuestionCancel}
          //     />
          //   ) : (
          //     <QuestionPreview
          //       key={index}
          //       index={index + 1}
          //       question={question}
          //       onEdit={() => this.handleEditExistingQuestion(index)}
          //       onDelete={() => this.handleDeleteExistingQuestion(index)}
          //     />
          //   )}
          //   <hr />
          // </React.Fragment>
        ))}
        {this.state.creatingQuestion && (
          <CreateQuestionForm
            index={this.state.questions.length + 1}
            onSubmit={this.handleCreateQuestionSubmit}
            onCancel={this.handleAddQuestionCancel}
          />
        )}
        {this.state.editedQuestion === "" && !this.state.creatingQuestion && (
          <CreateQuestionButton onClick={this.handleAddQuestion}>
            Add question
          </CreateQuestionButton>
        )}
      </TemporaryWrapper>
    );
  }
}
