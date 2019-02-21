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

const Wrapper = styled.div`
  position: relative;
`;

const OverlayButton = styled(IconButton)`
  opacity: 1;
  position: absolute;
  transition: opacity 0.2s ease-in-out;
`;

const OverlayButtonEdit = styled(OverlayButton)`
  bottom: 8px;
  right: 36px;
`;
const OverlayButtonDelete = styled(OverlayButton)`
  bottom: 8px;
  right: 8px;
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

export default class CreateQuestionForm extends React.Component {
  render() {
    return (
      <Wrapper>
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
                {this.props.index && (
                  <GridQuestionIndex>{`${
                    this.props.index
                  }.`}</GridQuestionIndex>
                )}
                <GridMultiLineTextInput
                  type="text"
                  name="title"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.title}
                  readOnly={this.props.readOnly}
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
                              readOnly={this.props.readOnly}
                            />
                            <GridSingleLineTextInput
                              type="text"
                              name={`answers.${index}`}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={answer}
                              readOnly={this.props.readOnly}
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
                              readOnly={this.props.readOnly}
                            />
                          </React.Fragment>
                        ))}
                      {!this.props.readOnly && (
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
                {!this.props.readOnly && (
                  <React.Fragment>
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
                  </React.Fragment>
                )}
              </QuestionGrid>
            </Form>
          )}
        />
        {this.props.readOnly && (
          <OverlayButtonEdit
            onClick={this.props.onEdit}
            icon={<IoMdCreate />}
          />
        )}
        {this.props.readOnly && (
          <OverlayButtonDelete
            onClick={this.props.onDelete}
            icon={<IoMdClose />}
          />
        )}
      </Wrapper>
    );
  }
}
