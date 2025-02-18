import React from "react";
import "./Row.css";
import Cell from "./Cell";

function Row(props) {
  return (
    <div className="Row">
      {props.data.rowdata.map((cell, index) => {
        return (
          <Cell
            data={cell}
            key={index + props.data.rowindex * 32}
            XY={[props.data.rowindex, index]}
            boder={props.board}
            she={props.she}
            food={props.food}
          />
        );
      })}
    </div>
  );
}

export default Row;
