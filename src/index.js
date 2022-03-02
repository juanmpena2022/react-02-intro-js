import React from "react";
import ReactDOM from "react-dom";
import CounterApp from "./03-counter/components/CounterApp/CounterApp";
import PrimeraApp from "./03-counter/components/PrimeraApp/PrimeraApp";

import "./index.css";

const divRoot = document.getElementById("root");
ReactDOM.render(<CounterApp />, divRoot);
