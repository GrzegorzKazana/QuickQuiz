import React from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";
import { TextButton } from "../Common/Buttons";
import { MultiLineTextInput } from "../Common/TextInputs";

const TemporaryWrapper = styled.div`
  width: 80%;
  max-width: 720px;
  margin: 16px auto;
`;

const TitleMultiLineInput = styled(MultiLineTextInput)`
  :hover {
    background: ${props => props.theme.color.grayLightActive};
  }
`;

const CreateQuestionButton = styled(TextButton)`
  width: 100%;
`;

const CreateQuizPage = props => (
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
      <React.Fragment key={index}>
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
      </React.Fragment>
    ))}
    {props.currentlyEdittedQuestion === -1 && (
      <CreateQuestionButton onClick={props.onAddQuestion} variant="sliced">
        Add question
      </CreateQuestionButton>
    )}
  </TemporaryWrapper>
);
export default CreateQuizPage;
