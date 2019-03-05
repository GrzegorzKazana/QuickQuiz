import React from "react";
import QuizForm from "./QuizForm";
import ResultsModal from "./ResultsModal";
import NavBar from "../Common/NavBar";
import { SpinnerOverlay } from "../Common/Spinners";
import { getQuiz } from "../../ApiConnections/MockApi";
import { withRouter } from "react-router-dom";
import QuizNotFoundModal from "./QuizNotFoundModal";
import * as CPS from "../Common/CommonPageStyling";

class QuizSolvePage extends React.Component {
  state = {
    title: "",
    questions: [],
    initialValues: {},
    resultPercent: 0,
    checkingQuestions: false,
    resultsModalOpen: false,
    fetchingQuestions: false,
    loadedQuestions: false
  };

  constructor(props) {
    super(props);
    this.state.quiz_hash = props.match.params.quiz_hash;
    this.state.fetchingQuestions = true;

    getQuiz(this.state.quiz_hash)
      .then(data =>
        this.setState({
          title: data.title,
          questions: data.questions,
          initialValues: data.questions.map(_ => ""),
          fetchingQuestions: false,
          loadedQuestions: true
        })
      )
      .catch(err => {
        console.log("failed to fetch questions", err);
        this.setState({ fetchingQuestions: false, loadedQuestions: false });
      });
  }

  handleSubmit = (values, actions) => {
    console.log(values);
    this.resetForm = actions.resetForm;
    this.setState({
      checkingQuestions: true,
      resultsModalOpen: true,
      resultPercent:
        values.answers.filter(
          (answer, index) =>
            parseInt(answer) === this.state.questions[index].correct
        ).length / values.answers.length
    });
  };

  bindToHandleSubmit = handleSubmit => {
    this.triggerSubmit = handleSubmit;
  };

  handleViewQuestionsAfterResults = () => {
    this.setState({ resultsModalOpen: false });
  };

  handleRetry = () => {
    this.resetForm(this.state.initialValues);
    this.setState({ checkingQuestions: false, resultsModalOpen: false });
  };

  handleGoHome = () => this.props.history.push("/");

  render() {
    return (
      <CPS.PageWrapper>
        <NavBar />
        <CPS.Content>
          <QuizForm
            questions={this.state.questions}
            initialValues={this.state.initialValues}
            checkingQuestions={this.state.checkingQuestions}
            onSubmit={this.handleSubmit}
            binder={this.bindToHandleSubmit}
          />
        </CPS.Content>
        <CPS.BottomBar>
          <CPS.BottomBarButton onClick={() => this.triggerSubmit()} type="text">
            Check
          </CPS.BottomBarButton>
        </CPS.BottomBar>
        {this.state.fetchingQuestions && <SpinnerOverlay />}
        <ResultsModal
          open={this.state.resultsModalOpen}
          resultPercent={this.state.resultPercent}
          onRetry={this.handleRetry}
          onViewQuiz={this.handleViewQuestionsAfterResults}
        />
        <QuizNotFoundModal
          open={!this.state.fetchingQuestions && !this.state.loadedQuestions}
          onGoBack={this.handleGoHome}
        />
      </CPS.PageWrapper>
    );
  }
}
export default withRouter(QuizSolvePage);
