import React from "react";
import styled from "styled-components";
import QuestionForm from "./QuestionForm";
import { TextButton } from "../Common/Buttons";
import { MultiLineTextInput } from "../Common/TextInputs";
import {
  Transition,
  CSSTransition,
  TransitionGroup
} from "react-transition-group";
import Fade from "../Common/Fade";

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
  /* transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)}; */
`;

const CSSTransitionStyled = styled(CSSTransition)`
  /* transition: opacity
    ${props =>
      `${props.theme.animation.duration} ${props.theme.animation.easing}`};
  opacity: ${props => (props.state === "entered" ? 1 : 0)}; */

  &.fade-enter {
  opacity: 0.01;
}
&.fade-enter-active {
  opacity: 1;
  transition: opacity 500ms ease-in;
}
&.fade-exit {
  opacity: 1;
}
&.fade-exit-active {
  opacity: 0.01;
  transition: opacity 500ms ease-in;
}
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
