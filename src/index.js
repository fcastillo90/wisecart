import React from "react";
import ReactDOM from "react-dom";
import thunk from "redux-thunk";
import reducer from "./reducers";
import I18n from "./I18n";
import App from "./components/App";
import { createLogger } from "redux-logger";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { setI18n, changeCountry, changeLanguage } from "./actions";
import { findCountryByLanguage } from "./types/countries";
import * as serviceWorker from "./serviceWorker";
import "./index.css";

const reduxLogger = createLogger();
const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));
//store.dispatch(setI18n(I18n));
//const country = findCountryByLanguage(I18n.language);
//store.dispatch(changeCountry(country.isoCode));
//sstore.dispatch(changeLanguage(country.language));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
