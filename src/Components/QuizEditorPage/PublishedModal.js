import React from "react";
import styled from "styled-components";
import { Modal } from "../Common/Modal";
import { SingleLineTextInput } from "../Common/TextInputs";
import { IconButton } from "../Common/Buttons";
import { IoMdCopy } from "react-icons/io";
import * as CMS from "../Common/CommonModalStyling";

const HyperLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SingleLineTextInputStyled = styled(SingleLineTextInput)`
  flex-grow: 1;
`;

const PublishedModal = props => (
  <Modal>
    <CMS.ContentWrapper>
      <CMS.TitleWrapper>Quiz published successfully</CMS.TitleWrapper>
      <CMS.SubtitleWrapper>
        Your quiz is available under the following address:
      </CMS.SubtitleWrapper>
      <HyperLinkWrapper>
        <SingleLineTextInputStyled
          value={`https://quickquiz.netlify.com/${props.quizHash}`}
          onChange={() => {}}
          onFocus={e => e.target.select()}
          fontSize="1.5rem"
        />
        <IconButton
          icon={<IoMdCopy />}
          size="32px"
          onClick={() => document.execCommand("copy")}
        />
      </HyperLinkWrapper>
      <CMS.ActionButtonsWrapper>
        <CMS.ActionTextButton variant="primary" onClick={props.onSolve}>
          Solve quiz
        </CMS.ActionTextButton>
        <CMS.ActionTextButton variant="secondary" onClick={props.onOk}>
          Ok
        </CMS.ActionTextButton>
      </CMS.ActionButtonsWrapper>
    </CMS.ContentWrapper>
  </Modal>
);

export default PublishedModal;
