import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import Router from "../src/router/Router";
import App from "./App"


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <StrictMode>
    <Router/>
  </StrictMode>
);
