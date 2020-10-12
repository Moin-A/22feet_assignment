import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Home from "./Home";
import Header from "./Header";
import Store from "./Store/Store";
import "../src/Fonts/Piedra-Regular.ttf";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Route path="/" component={Header} />
      <Route exact path="/" component={App} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Store" component={Store} />
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
