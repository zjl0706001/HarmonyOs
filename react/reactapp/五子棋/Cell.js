import React from "react";
import "./Cell.css";

export default function Cell({ value, XY, fn }) {
  const classname = value === 0 ? "cell" : value === 1 ? "cell a" : "cell b";
  return <div className={classname} onClick={() => fn(XY)}></div>;
}
