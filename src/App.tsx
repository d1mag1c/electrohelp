import React from 'react';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Main from "./pages/main";
import RouteComponent from "./router";
import {GlobalStyle} from "./styles";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
          <GlobalStyle/>
          <Header/>
          <Main>
              <RouteComponent/>
          </Main>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
