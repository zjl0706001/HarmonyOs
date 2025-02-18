const { useState } = React;
function Board() {
  const [data, setData] = useState({
    width: "200px",
    height: "200px",
    backgroundColor: "red",
  });
  return <div className="board" style={data}></div>;
}

ReactDOM.render(<Board />, document.getElementById("root"));
