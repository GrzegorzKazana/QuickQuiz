import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";
import { SingleLineTextInput, MultiLineTextInput } from "../Common/TextInputs";
import { RadioButton, IconButton } from "../Common/Buttons";
import { IoMdClose } from "react-icons/io";

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

const QuestionFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const StyledTitleInput = styled.input`
  margin: 0px 0px;
  padding: 0px;
  font-size: 32px;
  font-family: inherit;
`;

const StyledAnswerInput = styled.input`
  font-family: inherit;
`;

const ButtonWrapper = styled.div`
  display: flex;
  margin: 0px 0px 8px 0px;
`;

const StyledButton = styled.button`
  flex-grow: 1;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px 0px;
  align-items: center;
  grid-template-columns: min-content auto min-content;
`;

const AddAnswerButtonGrid = styled.button`
  grid-column: 1 / 4;
`;

const validate = values => {
  let errors = {};

  if (!values.title) {
    errors.title = "Required";
  }
  if (!values.answers || values.answers.some(answer => answer.length === 0)) {
    errors.answers = "Invalid answers";
  }
  const correctAnswerIndex = parseInt(values.correctAnswer);
  if (
    isNaN(correctAnswerIndex) ||
    correctAnswerIndex < 0 ||
    correctAnswerIndex >= values.answers.length
  ) {
    errors.correctAnswer = "Invalid selected answer";
  }

  return errors;
};

export default class CreateQuestionForm extends React.Component {
  render() {
    return (
      <Formik
        initialValues={this.props.question || questionInitialValues}
        onSubmit={(values, actions) => {
          this.props.onSubmit(values);
        }}
        validate={validate}
        render={({
          values,
          errors,
          status,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          setFieldValue
        }) => (
          <Form onSubmit={handleSubmit}>
            <QuestionFormWrapper>
              <MultiLineTextInput
                type="text"
                name="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {/* <ErrorMessage name="title" /> */}
              <FieldArray
                name="answers"
                render={arrayHelpers => (
                  <AnswerGrid>
                    {values.answers &&
                      values.answers.length > 0 &&
                      values.answers.map((answer, index) => (
                        <React.Fragment key={index}>
                          <RadioButton
                            type="radio"
                            name="correctAnswer"
                            value={index}
                            onChange={handleChange}
                            checked={parseInt(values.correctAnswer) === index}
                          />
                          <SingleLineTextInput
                            type="text"
                            name={`answers.${index}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={answer}
                          />
                          <IconButton
                            type="button"
                            onClick={() => {
                              const correctIndex = parseInt(
                                values.correctAnswer
                              );
                              if (correctIndex >= index) {
                                setFieldValue(
                                  "correctAnswer",
                                  correctIndex - 1
                                );
                              }
                              arrayHelpers.remove(index);
                            }}
                            icon={<IoMdClose />}
                          />
                        </React.Fragment>
                      ))}
                    <AddAnswerButtonGrid
                      type="button"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Add answer
                    </AddAnswerButtonGrid>
                    {/* <ErrorMessage name="answers" /> */}
                  </AnswerGrid>
                )}
              />
              <ButtonWrapper>
                <StyledButton type="submit">Submit</StyledButton>
                <StyledButton type="button" onClick={this.props.onCancel}>
                  Cancel
                </StyledButton>
              </ButtonWrapper>
            </QuestionFormWrapper>
          </Form>
        )}
      />
    );
  }
}
