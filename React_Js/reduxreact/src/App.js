// import logo from "./logo.svg";
import React from "react";
import store from "./store";
import Todolist from "./Todolist";
import { Provider } from "react-redux";

const App = () => (
  <Provider store={store}>
    <Todolist />
  </Provider>
);

export default App;
