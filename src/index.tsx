/* eslint-disable no-lone-blocks */
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Dashboard from "./components/DashBoard";
import { SettingsProvider } from "./contexts";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <SettingsProvider>
      <Dashboard />
    </SettingsProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
