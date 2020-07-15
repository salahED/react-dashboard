import React from "react";
import ReactDOM from "react-dom";
// import "./assets/css/main.css";
import App from "./containers/App";

/** redux */
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers";
// import { createLogger } from "redux-logger";

// const middleware = [thunk, createLogger(rootReducer)];
// const store = createStore(rootReducer, {}, applyMiddleware(...middleware));

ReactDOM.render(
  // <Provider store={store}>
  <App />,
  // </Provider>,
  document.getElementById("root")
);
