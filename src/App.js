import React, { Component } from "react";
import QuizEditorPage from "./Components/QuizEditorPage/QuizEditorPage";
import { ThemeProvider } from "styled-components";
import QuizSolvePage from "./Components/QuizSolvePage/QuizSolvePage";
import FrontPage from "./Components/FrontPage/FrontPage";

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
    grayLightActive: "#e6e6e6",
    grayDark: "#a6a6a6",
    accent: "#ffc107",
    primaryDarkOpacity: opac => `rgba(0, 121, 108, ${opac})`,
    primaryLightOpacity: opac => `rgba(178, 223, 219, ${opac})`,
    primaryOpacity: opac => `rgba(0, 150, 135, ${opac})`,
    textOpacity: opac => `rgba(255, 255, 255, ${opac})`,
    textPrimaryOpacity: opac => `rgba(33, 33, 33, ${opac})`,
    textSecondaryOpacity: opac => `rgba(117, 117, 117, ${opac})`,
    dividerOpacity: opac => `rgba(189, 189, 189, ${opac})`,
    grayLightOpacity: opac => `rgba(241, 241, 241, ${opac})`,
    grayLightActiveOpacity: opac => `rgba(230, 230, 230, ${opac})`,
    grayDarkOpacity: opac => `rgba(166, 166, 166, ${opac})`,
    accentOpacity: opac => `rgba(255, 193, 7, ${opac})`
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
        {/* <QuizEditorPage /> */}
        {/* <QuizSolvePage /> */}
        <FrontPage />
      </ThemeProvider>
    );
  }
}

export default App;
