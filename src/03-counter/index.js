import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./components/CounterApp/CounterApp";
import PrimeraApp from "./components/PrimeraApp/PrimeraApp";

import "./index.css";

const divRoot = document.getElementById("root");
ReactDOM.render(<CounterApp />, divRoot);
