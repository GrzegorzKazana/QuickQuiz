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

const ActionButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 8px -4px 0px -4px;
`;

const TextButtonStyled = styled(TextButton)`
  flex-grow: 1;
  margin: 4px;
`;

const ResultsModal = props => (
  <Modal open={props.open}>
    <ContentWrapper>
      <TitleWrapper>Results</TitleWrapper>
      <SubtitleWrapper>
        Your score:
        <ResultPercentSpan>72%</ResultPercentSpan>
      </SubtitleWrapper>
      <ActionButtonsWrapper>
        <TextButtonStyled variant="primary" onClick={props.onRetry}>
          Retry
        </TextButtonStyled>
        <TextButtonStyled variant="secondary" onClick={props.onViewQuiz}>
          View quiz
        </TextButtonStyled>
      </ActionButtonsWrapper>
    </ContentWrapper>
  </Modal>
);
export default ResultsModal;
