import React from "react";
import "./Cell.css";

export default function Cell(props) {
  let className = props.she.some((item) =>
    item.every((val, index) => val === props.XY[index]),
  )
    ? "cell she"
    : "cell";
  if (props.food[0] === props.XY[0] && props.food[1] === props.XY[1]) {
    className += " food";
  }
  return <div className={className}></div>;
}
