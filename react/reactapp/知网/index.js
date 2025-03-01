import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TopBanner from "./TopBanner";
import Header from "./Header";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <TopBanner />
    <Header />
  </>,
);
