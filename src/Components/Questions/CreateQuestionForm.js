import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

const QuestionFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledTitleInput = styled.input`
  margin: 8px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  padding: 8px;
`;

const StyledButton = styled.button`
  flex-grow: 1;
`;

const AnswerGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px;
  width: 75%
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
        onSubmit={(values, actions) => console.log(values)}
        validate={validate}
        render={({
          values,
          errors,
          status,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting
        }) => (
          <Form onSubmit={handleSubmit}>
            <QuestionFormWrapper>
              <StyledTitleInput
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
                          <input
                            type="radio"
                            name="correctAnswer"
                            value={index}
                            onChange={handleChange}
                            checked={parseInt(values.correctAnswer) === index}
                          />
                          <input
                            type="text"
                            name={`answers.${index}`}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={answer}
                          />
                          <button
                            type="button"
                            onClick={() => arrayHelpers.remove(index)}
                          >
                            X
                          </button>
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
                <StyledButton>Cancel</StyledButton>
              </ButtonWrapper>
            </QuestionFormWrapper>
          </Form>
        )}
      />
    );
  }
}
