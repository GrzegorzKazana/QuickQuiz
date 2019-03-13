import React from "react";
import styled from "styled-components";
import { Modal } from "../Common/Modal";
import * as CMS from "../Common/CommonModalStyling";

const ResultPercentSpan = styled.span`
  float: right;
  font-size: 2rem;
  color: ${props => props.theme.color.shade5};
`;

const ResultsModal = props => (
  <Modal>
    <CMS.ContentWrapper>
      <CMS.TitleWrapper>Results</CMS.TitleWrapper>
      <CMS.SubtitleWrapper>
        Your score:
        <ResultPercentSpan>{`${props.resultPercent * 100}%`}</ResultPercentSpan>
      </CMS.SubtitleWrapper>
      <CMS.ActionButtonsWrapper>
        <CMS.ActionTextButton variant="primary" onClick={props.onRetry}>
          Retry
        </CMS.ActionTextButton>
        <CMS.ActionTextButton variant="secondary" onClick={props.onViewQuiz}>
          View quiz
        </CMS.ActionTextButton>
      </CMS.ActionButtonsWrapper>
    </CMS.ContentWrapper>
  </Modal>
);
export default ResultsModal;
