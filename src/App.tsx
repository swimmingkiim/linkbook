import React from "react";
import GlobalStyle from "styles/globalStyle";
import RoutePage from "RoutePage";
import { ThemeProvider } from "styled-components";
import { theme } from "styles/theme";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RoutePage />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
