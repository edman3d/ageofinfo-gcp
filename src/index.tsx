/* eslint-disable no-lone-blocks */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/DashBoard";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <BrowserRouter>
    <Dashboard />
  </BrowserRouter>
);

{
  /* <React.StrictMode>
</React.StrictMode> */
}
