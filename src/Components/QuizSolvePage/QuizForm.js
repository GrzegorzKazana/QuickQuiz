import React from "react";
import styled from "styled-components";
import { Formik, Form, FieldArray } from "formik";
import { RadioButton } from "../Common/Buttons";

const TemporaryWrapper = styled.div`
  width: 80%;
  max-width: 720px;
  margin: 16px auto;
`;

const QuestionGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px 0px;
  align-items: baseline;
  grid-template-columns: min-content 1fr;
`;

const GridQuestionIndex = styled.div`
  font-size: 2rem;
`;

const QuestionTitleWrapper = styled.div`
  font-size: 2rem;
  grid-column: 2 / 3;
`;

const QuestionAnswerWrapper = styled.div`
  font-size: 2rem;
  grid-column: 2 / 3;
`;

const QuestionForm = props => (
  <QuestionGrid>
    <GridQuestionIndex>{`${props.index + 1}.`}</GridQuestionIndex>
    <QuestionTitleWrapper>{props.question.title}</QuestionTitleWrapper>
    {props.question.answers.map((answer, index) => (
      <React.Fragment key={index}>
        <RadioButton
          type="radio"
          name={`answers.${props.index}`}
          value={index}
          onChange={props.onChange}
        />
        <QuestionAnswerWrapper>{answer}</QuestionAnswerWrapper>
      </React.Fragment>
    ))}
  </QuestionGrid>
);

const QuizForm = props => (
  <TemporaryWrapper>
    <Formik
      initialValues={{ answers: props.questions.map(_ => "") }}
      onSubmit={props.onSubmit}
      render={({
        values,
        errors,
        status,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        setFieldValue,
        resetForm
      }) => (
        <Form>
          {props.binder(handleSubmit)}
          <FieldArray
            name="answers"
            render={arrayHelpers => (
              <React.Fragment>
                {props.questions.map((question, index) => (
                  <React.Fragment key={index}>
                    <QuestionForm
                      question={question}
                      index={index}
                      onChange={handleChange}
                    />
                    <hr />
                  </React.Fragment>
                ))}
              </React.Fragment>
            )}
          />
        </Form>
      )}
    />
  </TemporaryWrapper>
);
export default QuizForm;
