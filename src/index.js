import React from "react";
import ReactDOM from "react-dom";
import { CounterApp } from "./06-hook-app/components/01-useState/CounterApp";
import { CounterWithCustomHook } from "./06-hook-app/components/01-useState/CounterWithCustomHook";
import { FormWithCustomHook } from "./06-hook-app/components/02-useEffect/FormWithCustomHook";
import { SimpleForm } from "./06-hook-app/components/02-useEffect/SimpleForm";
import { MultipleCustomHooks } from "./06-hook-app/components/03-useFetch/MultipleCustomHooks";
import { FocusScreen } from "./06-hook-app/components/04-useRef/FocusScreen";
import { RefExample } from "./06-hook-app/components/04-useRef/RefExample";
import { Layout } from "./06-hook-app/components/05-useLayoutEffect/Layout";
import { CallbackHook } from "./06-hook-app/components/06-memos/CallbackHook";
import { MemoHook } from "./06-hook-app/components/06-memos/MemoHook";
import { Memorize } from "./06-hook-app/components/06-memos/Memorize";
import { Padre } from "./06-hook-app/components/07-tarea-memo/Padre";
import { TodoApp } from "./06-hook-app/components/08-useReducer/TodoApp";
import { HookApp } from "./06-hook-app/components/HookApp/HookApp";

import "./index.css";

const divRoot = document.getElementById("root");
ReactDOM.render(<TodoApp />, divRoot);