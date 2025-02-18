import React from "react";
import "./App.css";
import Row from "./Row";
function App() {
  const [data, setData] = React.useState({
    board: Array.from({ length: 16 }, () => Array(32).fill(0)),
    cellNum: 0,
  });
  const handleClick = ([row, col]) => {
    setData((prev) => {
      const { board, cellNum } = prev;
      const newBoard = board.map((r, i) =>
        i === row
          ? r.map((cell, j) =>
              j === col
                ? cell === 0
                  ? cellNum % 2 === 0
                    ? 1
                    : -1
                  : cell
                : cell,
            )
          : r,
      );
      if (check(row, col, newBoard)) {
        alert("游戏胜利！");
        setData({
          board: Array.from({ length: 16 }, () => Array(32).fill(0)),
          cellNum: 0,
        });
      }
      const newCellNum = board[row][col] === 0 ? cellNum + 1 : cellNum;
      console.log(newBoard, newCellNum);
      return {
        board: newBoard,
        cellNum: newCellNum,
      };
    });
  };
  const check = (row, col, board) => {
    let ans = [0, 0, 0, 0];
    // 水平方向
    for (let j = col + 1; j < board[0].length; j++) {
      if (board[row][j] === board[row][col]) ans[0] += 1;
      else break;
    }
    for (let j = col - 1; j >= 0; j--) {
      if (board[row][j] === board[row][col]) ans[0] += 1;
      else break;
    }
    // 垂直方向
    for (let i = row + 1; i < board.length; i++) {
      if (board[i][col] === board[row][col]) ans[1] += 1;
      else break;
    }
    for (let i = row - 1; i >= 0; i--) {
      if (board[i][col] === board[row][col]) ans[1] += 1;
      else break;
    }
    // 正对角线方向
    for (let i = 1; row + i < board.length && col + i < board[0].length; i++) {
      if (board[row + i][col + i] === board[row][col]) ans[2] += 1;
      else break;
    }
    for (let i = 1; row - i >= 0 && col - i >= 0; i++) {
      if (board[row - i][col - i] === board[row][col]) ans[2] += 1;
      else break;
    }
    // 反对角线方向
    for (let i = 1; row + i < board.length && col - i >= 0; i++) {
      if (board[row + i][col - i] === board[row][col]) ans[3] += 1;
      else break;
    }
    for (let i = 1; row - i >= 0 && col + i < board[0].length; i++) {
      if (board[row - i][col + i] === board[row][col]) ans[3] += 1;
      else break;
    }
    return ans.some((i) => i >= 4);
  };

  return (
    <div className="App">
      {data.board.map((row, index) => (
        <Row key={index} row={row} rowIndex={index} fn={handleClick} />
      ))}
    </div>
  );
}
export default App;
