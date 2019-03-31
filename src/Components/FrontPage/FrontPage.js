import React from "react";
import styled from "styled-components";
import { SingleLineTextInput } from "../Common/TextInputs";
import { TextButton } from "../Common/Buttons";
import { withRouter } from "react-router-dom";

const PageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  overflow: auto;
  min-width: 300px;
  min-height: 480px;
`;

const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  flex-grow: 3;
  background-color: ${props => props.theme.color.shade05};
  color: ${props => props.theme.color.shade5};
  padding: 0% 5%;
  text-align: right;
  min-width: auto;
`;

const TitleTextBox = styled.div`
  display: inline-block;
  font-size: 4.5rem;
  font-family: ${props => props.theme.typography.specialFont};
`;

const SubtitleText = styled.div`
  display: inline-block;
  font-size: 2.5rem;
  font-family: ${props => props.theme.typography.specialFont};
`;

const BottomContent = styled.div`
  flex-grow: 2;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SolveQuizPanel = styled.form`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.shade0};

  transition: background-color
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};

  :hover {
    background-color: ${props => props.theme.color.shade025};
  }
`;

const CreateQuizPanel = styled.div`
  flex: 1;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.color.shade0};
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

const SpannedText = styled.span`
  display: inline-block;
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
          <TitleTextBox>
            <div>QUICK</div>
            <div>QUIZ</div>
          </TitleTextBox>
          <SubtitleText>
            <SpannedText>create/</SpannedText>
            <SpannedText>solve/</SpannedText>share with ease
          </SubtitleText>
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
