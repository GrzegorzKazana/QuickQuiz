import React from "react";
import styled from "styled-components";
import QuestionForm from "../Components/Questions/QuestionForm";
import { TextButton } from "../Components/Common/Buttons";
import { MultiLineTextInput } from "../Components/Common/TextInputs";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

const TitleMultiLineInput = styled(MultiLineTextInput)`
  :hover {
    background: #e6e6e6;
  }
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
    titleFocused: true,
    title: "",
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
        <TitleMultiLineInput
          type="text"
          name="title"
          onChange={e => this.setState({ title: e.target.value })}
          value={this.state.title}
          readOnly={!this.state.titleFocused}
          onFocus={() => this.setState({ titleFocused: true })}
          onBlur={() => this.setState({ titleFocused: false })}
          placeholder="Quiz title"
        />
        <hr />
        {this.state.questions.map((question, index) => (
          <React.Fragment key={index}>
            <QuestionForm
              index={index + 1}
              question={question}
              onSubmit={values => this.handleQuestionSubmit(index, values)}
              onCancel={values => this.handleEditQuestionCancel(index, values)}
              readOnly={this.state.editedQuestion !== index}
              onEdit={() => this.handleEditExistingQuestion(index)}
              onDelete={() => this.handleDeleteExistingQuestion(index)}
            />
            <hr />
          </React.Fragment>
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
