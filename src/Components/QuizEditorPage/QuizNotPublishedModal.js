import React from "react";
import styled from "styled-components";
import { Modal } from "../Common/Modal";
import { TextButton } from "../Common/Buttons";
import * as CMS from "../Common/CommonModalStyling";

const TextButtonStyled = styled(TextButton)`
  width: calc(100% - 8px);
  margin: 4px;
`;

const QuizNotPublishedModal = props => (
  <Modal>
    <CMS.ContentWrapper>
      <CMS.TitleWrapper>Failed to publish quiz</CMS.TitleWrapper>
      <CMS.SubtitleWrapper>
        An error might have occured, or you have exceeded quiz post limit.
      </CMS.SubtitleWrapper>
      <TextButtonStyled variant="primary" onClick={props.onGoBack}>
        Go back
      </TextButtonStyled>
    </CMS.ContentWrapper>
  </Modal>
);
export default QuizNotPublishedModal;
