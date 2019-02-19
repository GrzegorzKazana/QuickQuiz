import React, { Component } from "react";
import CreateQuestionForm from "./Components/Questions/CreateQuestionForm";
import styled from "styled-components";

const TemporaryWrapper = styled.div`
  width: 500px;
  margin: 16px auto;
`;

class App extends Component {
  render() {
    return (
      <TemporaryWrapper>
        <CreateQuestionForm />
      </TemporaryWrapper>
    );
  }
}

export default App;
