import React from "react";
import ReactDOM from "react-dom";
import { JournalApp } from "./08-journal-app/JournalApp";

import "./08-journal-app/style/style.scss";

const divRoot = document.getElementById("root");
ReactDOM.render(<JournalApp />, divRoot);