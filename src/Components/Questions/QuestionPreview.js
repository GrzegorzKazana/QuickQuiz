import React from "react";
import styled from "styled-components";

const OverlayButton = styled.button`
  opacity: 0;
  position: absolute;
  transition: opacity 0.2s ease-in-out;
`;

const OverlayButtonEdit = styled(OverlayButton)`
  bottom: 8px;
  right: 36px;
`;
const OverlayButtonDelete = styled(OverlayButton)`
  bottom: 8px;
  right: 8px;
`;

const QuestionPreviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  :hover ${OverlayButton} {
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  font-size: 32px;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px;
  width: 75%;
  align-items: center;
  grid-template-columns: min-content auto;
`;

export default class QuestionPreview extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <QuestionPreviewWrapper>
        <TitleWrapper>{question.title}</TitleWrapper>
        <form>
          <AnswerGrid>
            {question.answers.map((answer, index) => (
              <React.Fragment key={index}>
                <input
                  type="radio"
                  name="correctAnswer"
                  readOnly
                  checked={parseInt(question.correctAnswer) === index}
                />
                {answer}
              </React.Fragment>
            ))}
          </AnswerGrid>
        </form>
        <OverlayButtonEdit>E</OverlayButtonEdit>
        <OverlayButtonDelete>D</OverlayButtonDelete>
      </QuestionPreviewWrapper>
    );
  }
}
