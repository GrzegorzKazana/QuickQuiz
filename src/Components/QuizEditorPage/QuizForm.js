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

export default class CreateQuizPage extends React.Component {
  render() {
    return (
      <TemporaryWrapper className={this.props.className}>
        <TitleMultiLineInput
          type="text"
          name="title"
          onChange={this.props.onTitleChange}
          value={this.props.title}
          readOnly={this.props.titleReadOnly}
          onFocus={this.props.onTitleFocus}
          onBlur={this.props.onTitleBlur}
          placeholder="Quiz title"
        />
        <hr />
        {this.props.questions.map((question, index) => (
          <React.Fragment key={index}>
            <QuestionForm
              index={index + 1}
              question={question}
              onSubmit={values => this.props.onQuestionSubmit(index, values)}
              onCancel={values => this.props.onQuestionCancel(index, values)}
              readOnly={this.props.currentlyEdittedQuestion !== index}
              onEdit={() => this.props.onQuestionEdit(index)}
              onDelete={() => this.props.onQuestionDelete(index)}
            />
            <hr />
          </React.Fragment>
        ))}
        {this.props.currentlyEdittedQuestion === "" && (
          <CreateQuestionButton
            onClick={this.props.onAddQuestion}
            variant="sliced"
          >
            Add question
          </CreateQuestionButton>
        )}
      </TemporaryWrapper>
    );
  }
}
