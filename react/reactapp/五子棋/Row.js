import React from "react";
import "./Row.css";
import Cell from "./Cell";

export default function Row({ row, rowIndex, fn }) {
  return (
    <div className="Row">
      {row.map((cell, index) => (
        <Cell key={index} value={cell} XY={[rowIndex, index]} fn={fn} />
      ))}
    </div>
  );
}
