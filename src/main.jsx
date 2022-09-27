import React from "react";
import ReactDOM from "react-dom/client";
import { FocusScreen } from "./04-useRef/FocusScreen";
import Layout from "./05-useLayoutEffect/Layout";
import { Memorize } from "./06-memo/Memorize";
import { UseMemorize } from "./07-useMemo/UseMemorize";
import { CallBack } from "./08-useCallBack/CallBack";
import { Padre } from "./09-tarea-memorize/Padre";
import CounterApp from "./components/CounterApp";
import MultipleCustomHooks from "./components/MultipleCustomHooks/MultipleCustomHooks";
import SimpleFormWithCustomHook from "./components/SimpleFomWithCustomHook";
import SimpleForm from "./components/SimpleForm";
import "./index.css";

/* <React.StrictMode>
  <CounterApp />
  <SimpleForm /> 
  <SimpleFormWithCustomHook />
  <MultipleCustomHooks />
  <FocusScreen />
  <Layout />
  <Memorize />
  <UseMemorize />
  <CallBack />
   </React.StrictMode> */

ReactDOM.createRoot(document.getElementById("root")).render(
  <Padre />
);
