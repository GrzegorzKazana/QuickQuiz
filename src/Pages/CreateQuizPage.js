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
    ]
  };

  render() {
    return (
      <TemporaryWrapper>
        {this.state.questions.map((question, index) => (
          // <CreateQuestionForm key={index} question={question} />
          <QuestionPreview key={index} question={question} />
        ))}
      </TemporaryWrapper>
    );
  }
}
