import React from "react";
import styled from "styled-components";

const QuestionPreviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleWrapper = styled.div`
  font-size: 32px;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px;
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
                  checked={parseInt(question.correctAnswer) === index}
                />
                {answer}
              </React.Fragment>
            ))}
          </AnswerGrid>
        </form>
      </QuestionPreviewWrapper>
    );
  }
}
