import React from "react";
import QuizForm from "./QuizForm";
import PublishedModal from "./PublishedModal";
import NavBar from "../Common/NavBar";
import { withRouter } from "react-router-dom";
import { Spinner } from "../Common/Spinners";
import { postQuiz } from "../../ApiConnections/MockApi";
// import { postQuiz } from "../../ApiConnections/RealApi";
import OpacityOverlay from "../Common/OpacityOverlay";
import * as CPS from "../Common/CommonPageStyling";

const questionInitialValues = {
  title: "",
  answers: ["", ""],
  correctAnswer: ""
};

class QuizEditorPage extends React.Component {
  state = {
    titleFocused: true,
    title: "",
    questions: [questionInitialValues],
    editedQuestion: 0,
    creatingQuestion: false,
    publishedModalOpen: false,
    publishingQuiz: false,
    publishedQuiz: false,
    quizHash: ""
  };

  handleQuestionSubmit = (index, values) => {
    this.setState(prevState => ({
      ...prevState,
      editedQuestion: -1,
      questions: prevState.questions.map((q, idx) =>
        idx === index ? values : q
      )
    }));
  };

  handleEditQuestionCancel = index => {
    if (this.state.questions[index] === questionInitialValues) {
      this.setState(prevState => ({
        ...prevState,
        questions: prevState.questions.slice(0, -1),
        editedQuestion: -1
      }));
    } else {
      this.setState({ editedQuestion: -1 });
    }
  };

  handleEditExistingQuestion = index => {
    this.setState({ editedQuestion: index });
  };

  handleDeleteExistingQuestion = delIndex => {
    if (this.state.questions.length === 1 && delIndex === 0) {
      this.setState({ questions: [questionInitialValues], editedQuestion: 0 });
      return;
    }
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.filter((_, index) => index !== delIndex)
    }));
  };

  handleAddQuestion = () => {
    this.setState(prevState => ({
      ...prevState,
      questions: prevState.questions.concat(questionInitialValues),
      editedQuestion: prevState.questions.length
    }));
  };

  handlePublish = () => {
    if (this.state.editedQuestion !== -1) {
      return;
    }
    this.setState({ publishingQuiz: true });
    const data = {
      quiz_title: this.state.title,
      questions: this.state.questions.map(q => ({
        question_text: q.title,
        correct_answer_index: parseInt(q.correctAnswer),
        answers: q.answers.map(ans => ({
          answer_text: ans
        }))
      }))
    };
    console.log(data);
    postQuiz(data)
      .then(data =>
        this.setState({
          publishingQuiz: false,
          publishedQuiz: true,
          publishedModalOpen: true,
          quizHash: data.hash_id
        })
      )
      .catch(err => {
        console.log("failed to publish", err);
        this.setState({
          publishingQuiz: false,
          publishedQuiz: false,
          publishedModalOpen: false
        });
      });
  };

  handlePublishOk = () => {
    this.setState({ publishedModalOpen: false });
    this.props.history.push("/");
  };

  handleSolveQuiz = () =>
    this.props.history.push(`/solve/${this.state.quizHash}`);

  render() {
    return (
      <CPS.PageWrapper>
        <NavBar />
        <CPS.Content>
          <QuizForm
            title={this.state.title}
            onTitleChange={e => this.setState({ title: e.target.value })}
            onTitleFocus={() => this.setState({ titleFocused: true })}
            onTitleBlur={() => this.setState({ titleFocused: false })}
            titleReadOnly={!this.state.titleFocused}
            questions={this.state.questions}
            onQuestionSubmit={this.handleQuestionSubmit}
            onQuestionCancel={this.handleEditQuestionCancel}
            onQuestionEdit={this.handleEditExistingQuestion}
            onQuestionDelete={this.handleDeleteExistingQuestion}
            currentlyEdittedQuestion={this.state.editedQuestion}
            onAddQuestion={this.handleAddQuestion}
          />
        </CPS.Content>
        <CPS.BottomBar>
          <CPS.BottomBarButton onClick={this.handlePublish}>
            Publish
          </CPS.BottomBarButton>
        </CPS.BottomBar>
        <OpacityOverlay
          open={this.state.publishingQuiz || this.state.publishedModalOpen}
        >
          {this.state.publishedModalOpen ? (
            <PublishedModal
              quizHash={this.state.quizHash}
              onSolve={this.handleSolveQuiz}
              onOk={this.handlePublishOk}
            />
          ) : (
            <Spinner />
          )}
        </OpacityOverlay>
      </CPS.PageWrapper>
    );
  }
}
export default withRouter(QuizEditorPage);
