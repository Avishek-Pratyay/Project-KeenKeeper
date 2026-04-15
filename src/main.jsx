import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { TimelineProvider } from "./context/TimelineContext";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <TimelineProvider>
      <App />
      <Toaster />
    </TimelineProvider>
  </BrowserRouter>
);