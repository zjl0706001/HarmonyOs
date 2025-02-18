import { useState } from "react";
import "./App.css";
import Columns from "./columns";

const App = () => {
  const [arr, setArr] = useState(
    Array.from({ length: 15 }, () => Math.floor(Math.random() * 500)),
  );
  const [isPaused, setIsPaused] = useState(false);
  const [isNext, setIsNext] = useState(false);
  const startSort = async () => {
    const len = arr.length;
    const newArr = [...arr];
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        while (isPaused && !isNext)
          await new Promise((resolve) => setTimeout(resolve, 100));
        setIsNext(false);
        if (newArr[j] > newArr[j + 1]) {
          [newArr[j], newArr[j + 1]] = [newArr[j + 1], newArr[j]];
        }
        setArr([...newArr]);
        console.log(arr);

        await new Promise((resolve) => setTimeout(resolve, 100));
      }
    }
  };

  const pauseSort = () => setIsPaused(true);
  const resumeSort = () => setIsPaused(false);
  const nextStep = () => setIsNext(true);
  const printf = () => console.log(arr);
  return (
    <div>
      <div
        className="app"
        style={{ gridTemplateColumns: `repeat(${arr.length}, 1fr)` }}
      >
        {arr.map((height, index) => (
          <Columns key={index} height={height} />
        ))}
      </div>
      <div className="controls">
        <button onClick={startSort}>开始排序</button>
        <button onClick={pauseSort}>暂停</button>
        <button onClick={resumeSort}>继续</button>
        <button onClick={nextStep}>下一步</button>
        <button onClick={printf}>printf</button>
      </div>
    </div>
  );
};

export default App;
