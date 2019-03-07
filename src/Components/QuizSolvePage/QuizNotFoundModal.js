import React from "react";
import styled from "styled-components";
import { Modal } from "../Common/Modal";
import { TextButton } from "../Common/Buttons";
import * as CMS from "../Common/CommonModalStyling";

const TextButtonStyled = styled(TextButton)`
  width: calc(100% - 8px);
  margin: 4px;
`;

const QuizNotFoundModal = props => (
  <Modal>
    <CMS.ContentWrapper>
      <CMS.TitleWrapper>Quiz not found</CMS.TitleWrapper>
      <CMS.SubtitleWrapper>
        Quiz might have expired, or it may has beeen deleted.
      </CMS.SubtitleWrapper>
      <TextButtonStyled variant="primary" onClick={props.onGoBack}>
        Go back
      </TextButtonStyled>
    </CMS.ContentWrapper>
  </Modal>
);
export default QuizNotFoundModal;
