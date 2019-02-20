import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";
import { SingleLineTextInput, MultiLineTextInput } from "../Common/TextInputs";
import { RadioButton, IconButton, TextButton } from "../Common/Buttons";
import { IoMdClose } from "react-icons/io";

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

const QuestionGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px 0px;
  align-items: center;
  grid-template-columns: min-content 1fr 1fr min-content;
`;

const GridMultiLineTextInput = styled(MultiLineTextInput)`
  grid-column: 2 / span 3;
`;
const GridSingleLineTextInput = styled(SingleLineTextInput)`
  grid-column: 2 / span 2;
`;

const AddAnswerButtonGrid = styled(TextButton)`
  grid-column: 1 / span 4;
`;

const GridSubmitButton = styled(TextButton)`
  grid-column: 1 / span 2;
`;

const GridCancelButton = styled(TextButton)`
  grid-column: 3 / span 2;
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
            <QuestionGrid>
              <GridMultiLineTextInput
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
                  <React.Fragment>
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
                          <GridSingleLineTextInput
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
                      variant="sliced"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Add answer
                    </AddAnswerButtonGrid>
                    {/* <ErrorMessage name="answers" /> */}
                  </React.Fragment>
                )}
              />
              <GridSubmitButton type="submit" variant="primary">
                Submit
              </GridSubmitButton>
              <GridCancelButton
                type="button"
                variant="secondary"
                onClick={this.props.onCancel}
              >
                Cancel
              </GridCancelButton>
            </QuestionGrid>
          </Form>
        )}
      />
    );
  }
}
