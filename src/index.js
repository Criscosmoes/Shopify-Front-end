import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./App.scss";
import "@fontsource/roboto";

// redux
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.querySelector("#root")
);
