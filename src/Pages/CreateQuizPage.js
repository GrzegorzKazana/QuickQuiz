import React from "react";
import styled from "styled-components";
import CreateQuestionForm from "../Components/Questions/CreateQuestionForm";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

export default class CreateQuizPage extends React.Component {
  render() {
    return (
      <TemporaryWrapper>
        <CreateQuestionForm />
      </TemporaryWrapper>
    );
  }
}
