import React from "react";
import { Formik, Form, FieldArray, ErrorMessage } from "formik";
import styled from "styled-components";
import { SingleLineTextInput, MultiLineTextInput } from "../Common/TextInputs";
import { RadioButton, IconButton, TextButton } from "../Common/Buttons";
import { IoMdClose, IoMdCreate } from "react-icons/io";

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

const OverlayButtonsWrapper = styled.div`
  opacity: 0;
  position: absolute;
  bottom: 0px;
  right: 0px;
  transition: opacity 0.2s ease;
`;

const Wrapper = styled.div`
  position: relative;

  :hover ${OverlayButtonsWrapper} {
    opacity: 1;
  }
`;

const QuestionGrid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  margin: 8px 0px;
  align-items: center;
  grid-template-columns: min-content 1fr 1fr min-content;
`;

const GridQuestionIndex = styled.div`
  font-size: 2rem;
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

const QuestionForm = props => (
  <Wrapper>
    <Formik
      initialValues={props.question || questionInitialValues}
      onSubmit={(values, actions) => {
        props.onSubmit(values);
      }}
      enableReinitialize={true}
      validate={validate}
      onReset={() => console.log("resetting")}
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
        <Form onSubmit={handleSubmit}>
          <QuestionGrid>
            {props.index && (
              <GridQuestionIndex>{`${props.index}.`}</GridQuestionIndex>
            )}
            <GridMultiLineTextInput
              type="text"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
              readOnly={props.readOnly}
            />
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
                          readOnly={props.readOnly}
                        />
                        <GridSingleLineTextInput
                          type="text"
                          name={`answers.${index}`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={answer}
                          readOnly={props.readOnly}
                        />
                        <IconButton
                          type="button"
                          onClick={() => {
                            const correctIndex = parseInt(values.correctAnswer);
                            if (correctIndex >= index) {
                              setFieldValue("correctAnswer", correctIndex - 1);
                            }
                            arrayHelpers.remove(index);
                          }}
                          icon={<IoMdClose />}
                          readOnly={props.readOnly}
                          size="32px"
                        />
                      </React.Fragment>
                    ))}
                  {!props.readOnly && (
                    <AddAnswerButtonGrid
                      type="button"
                      variant="sliced"
                      onClick={() => arrayHelpers.push("")}
                    >
                      Add answer
                    </AddAnswerButtonGrid>
                  )}
                </React.Fragment>
              )}
            />
            {!props.readOnly && (
              <React.Fragment>
                <GridSubmitButton type="submit" variant="primary">
                  Submit
                </GridSubmitButton>
                <GridCancelButton
                  type="button"
                  variant="secondary"
                  onClick={() => {
                    props.onCancel(values);
                    resetForm();
                  }}
                >
                  Cancel
                </GridCancelButton>
              </React.Fragment>
            )}
          </QuestionGrid>
        </Form>
      )}
    />
    {props.readOnly && props.showButtonOverlay && (
      <OverlayButtonsWrapper>
        <IconButton onClick={props.onEdit} icon={<IoMdCreate />} size="36px" />
        <IconButton onClick={props.onDelete} icon={<IoMdClose />} size="36px" />
      </OverlayButtonsWrapper>
    )}
  </Wrapper>
);
export default QuestionForm;
