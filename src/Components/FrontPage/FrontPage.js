import React from "react";
import styled from "styled-components";
import CreateQuizPage from "../QuizEditorPage/QuizForm";
import { SingleLineTextInput } from "../Common/TextInputs";
import { TextButton } from "../Common/Buttons";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
  flex-grow: 2;
  width: 100%;
`;

const BottomContent = styled.div`
  flex-grow: 1;
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const SolveQuizPanel = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: ${props => props.theme.color.primaryOpacity(0.5)};

  :hover {
    background-color: ${props => props.theme.color.primaryOpacity(0.65)};
  }
`;

const CreateQuizPanel = styled.div`
  width: 50%;
  height: 100%;
  text-align: center;
  background-color: ${props => props.theme.color.grayLight};

  :hover {
    background-color: ${props => props.theme.color.grayLightActive};
  }
`;

const QuizCodeInput = styled(SingleLineTextInput)`
  display: inline-block;
  margin: 16px 16px 4px 16px;
  width: 50%;
`;

const SolveQuizButton = styled(TextButton)`
  display: inline-block;
  margin: 4px 16px 16px 16px;
  width: 50%;
`;

const CreateQuizButton = styled(TextButton)`
  display: inline-block;
  margin: 16px 16px 4px 16px;
  width: 50%;
`;

const FrontPage = props => (
  <PageWrapper>
    <TopContent>Witaj tutaj</TopContent>
    <BottomContent>
      <SolveQuizPanel>
        <QuizCodeInput />
        <SolveQuizButton>Solve</SolveQuizButton>
      </SolveQuizPanel>
      <CreateQuizPanel>
        <CreateQuizButton variant="secondary">Create</CreateQuizButton>
      </CreateQuizPanel>
    </BottomContent>
  </PageWrapper>
);
export default FrontPage;
