import React, { useState } from "react";

import RoutesComp from "./routes";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./components/UI/StylesGeneral/index.styles.css";
import { lightTheme } from "./components/UI/StylesGeneral/theme";
import { ThemeProvider } from "styled-components";

import { MockContext } from "./Context";
import { dataMock } from "./components/Mock";

function App() {
  const [dados, setDados] = useState(dataMock);

  return (
    <ThemeProvider theme={lightTheme}>
      <MockContext.Provider value={[dados, setDados]}>
        <RoutesComp />
        <ToastContainer autoClose={4000} />
      </MockContext.Provider>
    </ThemeProvider>
  );
}

export default App;
