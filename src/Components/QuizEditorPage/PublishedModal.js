import React from "react";
import styled from "styled-components";
import Modal from "../Common/Modal";
import { TextButton } from "../Common/Buttons";
import { SingleLineTextInput } from "../Common/TextInputs";
import { IconButton } from "../Common/Buttons";
import { IoMdCopy } from "react-icons/io";

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
  padding: 8px 8px 0px 8px;
`;

const HyperLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SingleLineTextInputStyled = styled(SingleLineTextInput)`
  flex-grow: 1;
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

const PublishedModal = props => (
  <Modal open={props.open}>
    <ContentWrapper>
      <TitleWrapper>Quiz published successfully</TitleWrapper>
      <SubtitleWrapper>
        Your quiz is available under the following address:
      </SubtitleWrapper>
      <HyperLinkWrapper>
        <SingleLineTextInputStyled
          value={`www.asdasd.com/solve/${props.quizHash}`}
          onChange={() => {}}
          onClick={e => e.target.select()}
          fontSize="1.5rem"
        />
        <IconButton
          icon={<IoMdCopy />}
          size="32px"
          onClick={() => document.execCommand("copy")}
        />
      </HyperLinkWrapper>
      <ActionButtonsWrapper>
        <TextButtonStyled variant="primary" onClick={props.onSolve}>
          Solve quiz
        </TextButtonStyled>
        <TextButtonStyled variant="secondary" onClick={props.onOk}>
          Ok
        </TextButtonStyled>
      </ActionButtonsWrapper>
    </ContentWrapper>
  </Modal>
);

export default PublishedModal;
