import React from "react";
import styled from "styled-components";
import { SingleLineTextInput } from "../Common/TextInputs";
import { TextButton } from "../Common/Buttons";
import { withRouter } from "react-router-dom";

const PageWrapper = styled.div`
  /* width: 100vw;
  height: 100vh; */
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  flex-grow: 3;
  width: 100%;
  background-color: ${props => props.theme.color.shade05};
`;

const TopText = styled.div`
  text-align: right;
  margin: auto;
  margin-right: 10%;
  color: ${props => props.theme.color.shade5};
`;

const TitleText = styled.div`
  font-size: 4.5rem;
  font-family: ${props => props.theme.typography.specialFont};
`;

const SubtitleText = styled.div`
  font-size: 2.5rem;
  font-family: ${props => props.theme.typography.specialFont};
`;

const BottomContent = styled.div`
  flex-grow: 2;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SolveQuizPanel = styled.form`
  flex: 1;
  min-width: 240px;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.shade025};
  }
`;

const CreateQuizPanel = styled.div`
  min-width: 240px;
  flex: 1;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.shade025};
  }
`;

const QuizCodeInput = styled(SingleLineTextInput)`
  display: inline-block;
  margin: 16px 0px 4px 0px;
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
            <TitleText>QUICKQUIZ</TitleText>
            <SubtitleText>sample text placeholder</SubtitleText>
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
              Solve quiz
            </SolveQuizButton>
          </SolveQuizPanel>
          <CreateQuizPanel>
            <CreateQuizButton variant="secondary" onClick={this.routeToCreate}>
              Create quiz
            </CreateQuizButton>
          </CreateQuizPanel>
        </BottomContent>
      </PageWrapper>
    );
  }
}
export default withRouter(FrontPage);
