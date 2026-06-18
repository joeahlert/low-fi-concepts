import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
// Shared SDS tokens, reset, responsive + icon styles (single source of truth).
import "../../src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
