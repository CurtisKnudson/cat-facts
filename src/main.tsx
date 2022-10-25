import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import CatFactProvider from "./providers/catFactProvider";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CatFactProvider>
      <App />
    </CatFactProvider>
  </React.StrictMode>
);
