import React, { Component } from "react";
import styled from "styled-components";
import QuizEditorPage from "./Components/QuizEditorPage/QuizEditorPage";
import { ThemeProvider } from "styled-components";
import QuizSolvePage from "./Components/QuizSolvePage/QuizSolvePage";
import FrontPage from "./Components/FrontPage/FrontPage";
import {
  BrowserRouter as Router,
  Route,
  withRouter,
  Switch
} from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const theme = {
  color: {
    shade0: "#111",
    shade025: "#181818",
    shade05: "#222",
    shade1: "#333",
    shade2: "#555",
    shade3: "#777",
    shade4: "#999",
    shade5: "#BBB",
    shade6: "#DDD",
    error: "#b00020",
    primary: "#009688"
  },
  animation: {
    duration: "0.3s",
    easing: "ease"
  },
  sizing: {
    navBarSize: "50px"
  },
  typography: {
    specialFont: '"Courier New", Courier, monospace'
  }
};

const Wrapper = styled.div`
  /* width: 100vw;
  min-height: 100vh;
  min-width: 480px; */
  display: relative;

  background-color: ${theme.color.shade0};

  .fade-enter {
    opacity: 0;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity ${theme.animation.duration} ${theme.animation.easing};
  }
  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0;
    transition: opacity ${theme.animation.duration} ${theme.animation.easing};
  }

  div.transition-group {
    position: relative;
    background-color: transparent;
  }

  section.route-section {
    background-color: transparent;

    position: absolute;
    background-color: ${theme.color.shade0};
    display: flex;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    height: 1px;
    overflow: auto;
    overflow-x: auto;
  }
`;

// router animation reference
// https://medium.com/@khwsc1/step-by-step-guide-of-simple-routing-transition-effect-for-react-with-react-router-v4-and-9152db1566a0
const Content = ({ location }) => (
  <Wrapper>
    <TransitionGroup className="route-section">
      <CSSTransition key={location.key} timeout={300} classNames={"fade"}>
        <section className="route-section">
          <Switch location={location}>
            <Route exact path="/" component={FrontPage} />
            <Route exact path="/solve/:quiz_hash" component={QuizSolvePage} />
            <Route exact path="/create" component={QuizEditorPage} />
          </Switch>
        </section>
      </CSSTransition>
    </TransitionGroup>
  </Wrapper>
);

const RoutedContent = withRouter(Content);

class App extends Component {
  render() {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <RoutedContent />
        </ThemeProvider>
      </Router>
    );
  }
}

export default App;
