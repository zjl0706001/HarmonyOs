import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <Nav />
      <Search />
    </div>
  );
}
export default Header;
function Nav() {
  const navTitle = [
    "手机版",
    "读者服务",
    "作者服务",
    "出版服务",
    "产品解决方案",
    "华知大模型",
    " 联系我们",
    "帮助",
  ];
  const [newNavid, setNewNavid] = React.useState(null);
  const handleClick = (e) => {
    e.target.getAttribute("data-id") === newNavid
      ? setNewNavid(null)
      : setNewNavid(e.target.getAttribute("data-id"));
  };
  return (
    <div className="nav">
      <div className="nav-logo"></div>
      <div className="head-left" onClick={handleClick}>
        {navTitle.map((item, index) => {
          switch (index) {
            case 0:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                  <div
                    className="dropdown-content"
                    style={{
                      display: `${index === newNavid + 0 ? "none" : "block"}`,
                      position: "absolute",
                      top: "60px",
                      left: "100px",
                      height: "160px",
                      width: "240px",
                      borderRadius: "6px",
                      backgroundColor: "#ffffff",
                    }}
                  ></div>
                </div>
              );
            case 1:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                  <div className="dropdown-content"></div>
                </div>
              );
            case 2:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                  <div className="dropdown-content"></div>
                </div>
              );
            case 3:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                  <div className="dropdown-content"></div>
                </div>
              );
            case 4:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                  <div className="dropdown-content"></div>
                </div>
              );
            case 5:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                </div>
              );
            case 6:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                </div>
              );
            case 7:
              return (
                <div className="nav-item" key={index} data-id={index}>
                  {item}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
      <div className="head-right"></div>
    </div>
  );
}
function Search() {
  return <div className="search"></div>;
}
