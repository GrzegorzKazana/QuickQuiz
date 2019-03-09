import React from "react";
import styled from "styled-components";
import { SingleLineTextInput } from "../Common/TextInputs";
import { TextButton } from "../Common/Buttons";
import { withRouter } from "react-router-dom";

const PageWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
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

const SolveQuizPanel = styled.form`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
  }
`;

const CreateQuizPanel = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: rgba(255, 255, 255, 0.25);
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

class FrontPage extends React.Component {
  state = {
    quizCodeInput: "",
    checkCodeInput: false
  };

  handleCodeInput = e => this.setState({ quizCodeInput: e.target.value });

  routeToSolve = e => {
    e.preventDefault();
    this.setState({ checkCodeInput: true });
    if (this.state.quizCodeInput) {
      this.props.history.push(`/solve/${this.state.quizCodeInput}`);
    }
  };

  routeToCreate = () => this.props.history.push("/create");

  render() {
    return (
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
            <QuizCodeInput
              value={this.state.quizCodeInput}
              onChange={this.handleCodeInput}
              placeholder="Quiz Code"
              error={
                this.state.checkCodeInput && this.state.quizCodeInput === ""
              }
            />
            <SolveQuizButton onClick={this.routeToSolve} type="submit">
              Solve
            </SolveQuizButton>
          </SolveQuizPanel>
          <CreateQuizPanel>
            <CreateQuizButton variant="secondary" onClick={this.routeToCreate}>
              Create
            </CreateQuizButton>
          </CreateQuizPanel>
        </BottomContent>
      </PageWrapper>
    );
  }
}
export default withRouter(FrontPage);
