import React from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";
import { TextButton } from "../Common/Buttons";
import { MultiLineTextInput } from "../Common/TextInputs";
import { Transition } from "react-transition-group";

const TemporaryWrapper = styled.div`
  width: 80%;
  max-width: 720px;
  margin: 16px auto;
`;

const TitleMultiLineInput = styled(MultiLineTextInput)`
  :hover {
    background: ${props => props.theme.color.grayLight};
  }
`;

const CreateQuestionButton = styled(TextButton)`
  width: 100%;
`;

const QuestionFormWrapper = styled.div`
  transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)};

  /* transition: max-height
    ${props =>
      `calc(${props.theme.animation.duration} * 2.5) ${
        props.theme.animation.easing
      }`};
  max-height: ${props => (props.state === "entered" ? "1000px" : "0px")};
  overflow: hidden; */
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
      <Transition key={index} in={true} appear={true} timeout={0}>
        {state => {
          console.log(state);
          return (
            <QuestionFormWrapper state={state}>
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
            </QuestionFormWrapper>
          );
        }}
      </Transition>
    ))}
    {props.currentlyEdittedQuestion === -1 && (
      <CreateQuestionButton onClick={props.onAddQuestion} variant="sliced">
        Add question
      </CreateQuestionButton>
    )}
  </TemporaryWrapper>
);
export default QuizForm;
