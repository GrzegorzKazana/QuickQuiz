import React from "react";
import styled from "styled-components";
import QuizForm from "./QuizForm";

export default class QuizSolvePage extends React.Component {
  state = {
    questions: [
      { title: "sdsasd", answers: ["a", "b"], correctAnswer: "0" },
      { title: "qqqq", answers: ["a", "bb"], correctAnswer: "1" },
      { title: "wewe", answers: ["qwq", "ewe"], correctAnswer: "1" }
    ]
  };

  render() {
    return <QuizForm questions={this.state.questions} />;
  }
}
