import React, { Component } from "react";
import styled from "styled-components";
import QuizEditorPage from "./Components/QuizEditorPage/QuizEditorPage";
import { ThemeProvider } from "styled-components";
import QuizSolvePage from "./Components/QuizSolvePage/QuizSolvePage";
import FrontPage from "./Components/FrontPage/FrontPage";
import { BrowserRouter as Router, Route } from "react-router-dom";

const theme = {
  color: {
    primaryDark: "#00796b",
    primaryLight: "#b2dfdb",
    primary: "#009688",
    text: "#ffffff",
    textPrimary: "#212121",
    textSecondary: "#757575",
    divider: "#bdbdbd",
    grayLight: "#f5f5f5",
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
  },
  sizing: {
    navBarSize: "50px"
  }
};

const Wrapper = styled.div`
  background-image: linear-gradient(
    to left top,
    #009688,
    #3ba497,
    #5ab1a7,
    #76bfb6,
    #90cdc6,
    #8fd5c6,
    #91dcc5,
    #95e3c1,
    #99e29d,
    #b0dd71,
    #d4d341,
    #ffc107
  );
`;

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <Wrapper>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/solve" component={QuizSolvePage} />
            <Route exact path="/create" component={QuizEditorPage} />
          </Wrapper>
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
