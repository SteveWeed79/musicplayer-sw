import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.js";
import AudioPlayer from "./components/AudioPlayer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AudioPlayer />
  </React.StrictMode>
);
