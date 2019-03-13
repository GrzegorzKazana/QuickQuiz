import React from "react";
import QuizForm from "./QuizForm";
import ResultsModal from "./ResultsModal";
import NavBar from "../Common/NavBar";
import { Spinner } from "../Common/Spinners";
import { getQuiz } from "../../ApiConnections/MockApi";
// import { getQuiz } from "../../ApiConnections/RealApi";
import { withRouter } from "react-router-dom";
import QuizNotFoundModal from "./QuizNotFoundModal";
import OpacityOverlay from "../Common/OpacityOverlay";
import * as CPS from "../Common/CommonPageStyling";

class QuizSolvePage extends React.Component {
  state = {
    title: "",
    questions: [],
    initialValues: { answers: [] },
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
  }

  componentDidMount() {
    getQuiz(this.state.quiz_hash)
      .then(data => {
        this.setState({
          title: data.quiz_title,
          questions: data.questions,
          initialValues: { answers: data.questions.map(_ => "") },
          fetchingQuestions: false,
          loadedQuestions: true
        });
      })
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
            parseInt(answer) === this.state.questions[index].correct_answer
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
            title={this.state.title}
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
        <OpacityOverlay
          open={
            this.state.fetchingQuestions ||
            this.state.resultsModalOpen ||
            (!this.state.fetchingQuestions && !this.state.loadedQuestions)
          }
        >
          {this.state.fetchingQuestions && <Spinner />}
          {this.state.resultsModalOpen && (
            <ResultsModal
              resultPercent={this.state.resultPercent}
              onRetry={this.handleRetry}
              onViewQuiz={this.handleViewQuestionsAfterResults}
            />
          )}
          {!this.state.fetchingQuestions && !this.state.loadedQuestions && (
            <QuizNotFoundModal onGoBack={this.handleGoHome} />
          )}
        </OpacityOverlay>
      </CPS.PageWrapper>
    );
  }
}
export default withRouter(QuizSolvePage);
