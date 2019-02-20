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
  margin: 8px;

  :hover ${OverlayButton} {
    opacity: 1;
  }
`;

const TitleWrapper = styled.div`
  font-size: 32px;
  word-break: break-word;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px 0px;
  align-items: center;
  grid-template-columns: min-content auto;
`;

export default class QuestionPreview extends React.Component {
  render() {
    const { question } = this.props;
    return (
      <QuestionPreviewWrapper>
        <TitleWrapper>{`${question.title}`}</TitleWrapper>
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
        <OverlayButtonEdit onClick={this.props.onEdit}>E</OverlayButtonEdit>
        <OverlayButtonDelete onClick={this.props.onDelete}>
          D
        </OverlayButtonDelete>
      </QuestionPreviewWrapper>
    );
  }
}
