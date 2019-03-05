import React from "react";
import styled from "styled-components";
import Modal from "../Common/Modal";
import { TextButton } from "../Common/Buttons";

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const TitleWrapper = styled.div`
  font-size: 2rem;
  padding: 8px;
`;

const SubtitleWrapper = styled.div`
  font-size: 1.5rem;
  padding: 8px 8px 8px 8px;
`;

const ResultPercentSpan = styled.span`
  float: right;
  font-size: 2rem;
  color: ${props => props.theme.color.primaryDark};
`;

// const ActionButtonsWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
//   margin: 8px -4px 0px -4px;
// `;

const TextButtonStyled = styled(TextButton)`
  width: calc(100% - 8px);
  margin: 4px;
`;

const QuizNotFoundModal = props => (
  <Modal open={props.open}>
    <ContentWrapper>
      <TitleWrapper>Quiz not found</TitleWrapper>
      <SubtitleWrapper>
        Quiz might have expired, or it may has beeen deleted.
      </SubtitleWrapper>
      <TextButtonStyled variant="primary" onClick={props.onGoBack}>
        Go back
      </TextButtonStyled>
    </ContentWrapper>
  </Modal>
);
export default QuizNotFoundModal;
