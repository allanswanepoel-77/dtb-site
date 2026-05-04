import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";

import memberstackDOM from "@memberstack/dom";

const memberstack = memberstackDOM.init({
  publicKey: "pk_a72ea2aa0fabe1b32721",
});

window.$memberstackDom = memberstack;

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);