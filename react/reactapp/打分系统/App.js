import React from "react";
import "./App.css";

function App() {
  const data = [1, 2, 3, 4, 5];
  const [newfen, setNewfen] = React.useState(0);
  const [fen, setFen] = React.useState(0);

  const handleonmousemove = (e) => {
    setFen(Number(e.target.dataset.id));
    console.log(e.target.dataset.id);
  };
  const handleonmouseout = () => {
    setFen(newfen);
  };
  const handleClick = (e) => {
    setFen(Number(e.target.dataset.id));
    setNewfen(Number(e.target.dataset.id));
  };

  return (
    <>
      <div className="App">
        <div className="img">
          {data.map((_, index) => (
            <Xing
              key={index}
              dataId={_}
              fen={fen}
              onMouseEnter={handleonmousemove}
              onMouseOut={handleonmouseout}
              onClick={handleClick}
              newfen={newfen}
            />
          ))}
        </div>
      </div>

      <Printf fen={fen} newfen={newfen} />

      <Printff
        fen={fen}
        newfen={newfen}
        onMouseEnter={handleonmousemove}
        onMouseOut={handleonmouseout}
      />
    </>
  );
}

export default App;

function Xing({ dataId, fen, onMouseEnter, onMouseOut, onClick }) {
  return (
    <img
      src="/star.gif"
      alt="Star"
      data-id={dataId}
      onMouseEnter={onMouseEnter}
      onMouseOut={onMouseOut}
      onClick={onClick}
      style={dataId <= fen ? { position: "relative", top: "-50px" } : {}}
    />
  );
}

function Printf({ fen, newfen }) {
  return (
    <div
      className={"printf"}
      style={newfen ? { display: "block" } : { display: "none" }}
    >
      {newfen}星
    </div>
  );
}
const Printff = ({ fen, newfen }) => (
  <div
    className={"printff"}
    style={fen ? { display: "block" } : { display: "none" }}
  >
    {fen}星
  </div>
);
