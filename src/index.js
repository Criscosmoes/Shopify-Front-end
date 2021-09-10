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

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
