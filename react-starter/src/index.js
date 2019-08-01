import React from "react";
import ReactDOM from "react-dom";
import Parent from "./components/Parent";

const app_target = document.getElementById('app')
const App = () => <Parent />;

ReactDOM.render(<App />, app_target);
