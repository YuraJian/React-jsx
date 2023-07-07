import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { AlbumsProvider } from "./Task 1/context/AlbumsContext";
import { AlbumsProviderHook } from "./Task 2/components/AlbumsContextHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlbumsProvider>
      <AlbumsProviderHook>
        <App />
      </AlbumsProviderHook>
    </AlbumsProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
