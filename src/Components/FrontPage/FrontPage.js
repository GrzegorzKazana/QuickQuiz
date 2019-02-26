import React from "react";
import styled from "styled-components";
import CreateQuizPage from "../QuizEditorPage/QuizForm";
import { SingleLineTextInput } from "../Common/TextInputs";
import { TextButton } from "../Common/Buttons";
import { withRouter } from "react-router-dom";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(
    to left top,
    #009688,
    #3ba497,
    #5ab1a7,
    #76bfb6,
    #90cdc6,
    #8fd5c6,
    #91dcc5,
    #95e3c1,
    #99e29d,
    #b0dd71,
    #d4d341,
    #ffc107
  );
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 2;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

const TopText = styled.div`
  float: right;
  text-align: right;
  margin-right: 10%;
  color: #fff;
  font-size: 3rem;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);

  :hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

const CreateQuizPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.05);

  :hover {
    background-color: rgba(255, 255, 255, 0.1);
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
  padding: 8px 0px;
  width: calc(50% + 16px);
`;

const CreateQuizButton = styled(TextButton)`
  display: inline-block;
  padding: 8px 0px;
  margin: 16px 16px 4px 16px;
  width: calc(50% + 16px);
`;

const FrontPage = props => (
  <PageWrapper>
    <TopContent>
      <TopText>
        LOREM IPSUM
        <br />
        sample text placeholder
      </TopText>
    </TopContent>
    <BottomContent>
      <SolveQuizPanel>
        <QuizCodeInput />
        <SolveQuizButton onClick={() => props.history.push("/solve")}>
          Solve
        </SolveQuizButton>
      </SolveQuizPanel>
      <CreateQuizPanel>
        <CreateQuizButton
          variant="secondary"
          onClick={() => props.history.push("/create")}
        >
          Create
        </CreateQuizButton>
      </CreateQuizPanel>
    </BottomContent>
  </PageWrapper>
);
export default withRouter(FrontPage);
