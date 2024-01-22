import React from 'react';
import Header from "./pages/header";
import Footer from "./pages/footer";
import Main from "./pages/main";
import RouteComponent from "./router";
import {GlobalStyle} from "./styles";
import {BrowserRouter} from "react-router-dom";
import FixedFooter from "./pages/footer/fixedFooter";

function App() {
  return (
      <BrowserRouter>
          <GlobalStyle/>
          <Header/>
          <Main>
              <RouteComponent/>
          </Main>
          <FixedFooter/>
          <Footer/>
      </BrowserRouter>
  );
}

export default App;
