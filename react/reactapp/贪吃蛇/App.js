import React from "react";
import "./App.css";
import Row from "./Row";
function App() {
  const [data, setData] = React.useState({
    board: Array.from({ length: 16 }, () => Array(32).fill(0)),
    she: [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    direction: [0, 1],
    food: [Math.floor(Math.random() * 16), Math.floor(Math.random() * 32)],
    gameOver: false,
  });
  const handleKeyDown = React.useCallback((event) => {
    setData((data) => {
      let [y, x] = data.direction;
      switch (event.key) {
        case "ArrowUp":
        case "w":
          if (y !== 1) {
            x = 0;
            y = -1;
          }
          break;
        case "ArrowDown":
        case "s":
          if (y !== -1) {
            x = 0;
            y = 1;
          }
          break;
        case "ArrowLeft":
        case "a":
          if (x !== 1) {
            x = -1;
            y = 0;
          }
          break;
        case "ArrowRight":
        case "d":
          if (x !== -1) {
            x = 1;
            y = 0;
          }
          break;
        default:
          break;
      }
      return { ...data, direction: [y, x] };
    });
  }, []);
  React.useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);
  React.useEffect(() => {
    if (!data.gameOver) {
      const interval = setInterval(() => {
        setData((data) => {
          const newShe = [...data.she];
          let newFood = [...data.food];
          if (
            newShe[0][0] + data.direction[0] === data.food[0] &&
            newShe[0][1] + data.direction[1] === data.food[1]
          ) {
            newFood = [
              Math.floor(Math.random() * 16),
              Math.floor(Math.random() * 32),
            ];
            newShe.unshift([
              newShe[0][0] + data.direction[0],
              newShe[0][1] + data.direction[1],
            ]);
          } else {
            newShe.unshift([
              newShe[0][0] + data.direction[0],
              newShe[0][1] + data.direction[1],
            ]);

            newShe.pop();
          }
          if (
            newShe[0][0] < 0 ||
            newShe[0][0] > 15 ||
            newShe[0][1] < 0 ||
            newShe[0][1] > 31
          ) {
            alert("Game Over");
            return {
              ...data,
              gameOver: true,
              she: [
                [0, 0],
                [0, 1],
                [0, 2],
              ],
              direction: [0, 1],
              food: [
                Math.floor(Math.random() * 16),
                Math.floor(Math.random() * 32),
              ],
            };
          } else
            return {
              ...data,
              she: newShe,
              food: newFood,
            };
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="App">
      {data.board.map((row, index) => (
        <Row
          key={index}
          data={{ rowindex: index, rowdata: row }}
          board={data.board}
          she={data.she}
          food={data.food}
        />
      ))}
    </div>
  );
}
export default App;
