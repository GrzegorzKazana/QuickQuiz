import React from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";
import { TextButton } from "../Common/Buttons";
import { MultiLineTextInput } from "../Common/TextInputs";
import Fade from "../Common/Fade";

const TemporaryWrapper = styled.div`
  min-width: 80%;
  max-width: 720px;
  padding: 8px 8px;
  margin: auto;
`;

const TitleMultiLineInput = styled(MultiLineTextInput)`
  /* :hover {
    background: ${props => props.theme.color.shade1};
  } */
`;

const CreateQuestionButton = styled(TextButton)`
  width: 100%;
`;

const QuizForm = props => (
  <TemporaryWrapper className={props.className}>
    <TitleMultiLineInput
      type="text"
      name="title"
      onChange={props.onTitleChange}
      value={props.title}
      readOnly={props.titleReadOnly}
      onFocus={props.onTitleFocus}
      onBlur={props.onTitleBlur}
      placeholder="Quiz title"
    />
    <hr />
    {props.questions.map((question, index) => (
      <Fade key={index}>
        <QuestionForm
          index={index + 1}
          question={question}
          onSubmit={values => props.onQuestionSubmit(index, values)}
          onCancel={() => props.onQuestionCancel(index)}
          readOnly={props.currentlyEdittedQuestion !== index}
          onEdit={() => props.onQuestionEdit(index)}
          onDelete={() => props.onQuestionDelete(index)}
          showButtonOverlay={props.currentlyEdittedQuestion === -1}
        />
        <hr />
      </Fade>
    ))}
    {props.currentlyEdittedQuestion === -1 && (
      <CreateQuestionButton onClick={props.onAddQuestion} variant="sliced">
        Add question
      </CreateQuestionButton>
    )}
  </TemporaryWrapper>
);
export default QuizForm;
