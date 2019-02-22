import React, { Component } from "react";
import CreateQuiz from "./Pages/CreateQuizPage";
import { ThemeProvider } from "styled-components";

const theme = {
  color: {
    primaryDark: "#00796b",
    primaryLight: "#b2dfdb",
    primary: "#009688",
    text: "#ffffff",
    textPrimary: "#212121",
    textSecondary: "#757575",
    divider: "#bdbdbd",
    grayLight: "#f1f1f1",
    grayDark: "#a6a6a6",
    accent: "#ffc107"
  },
  animation: {
    duration: "0.3s",
    easing: "ease"
  }
};

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <CreateQuiz />
      </ThemeProvider>
    );
  }
}

export default App;
