import React, { useState } from "react";
import "./TopBanner.css";

function TopBanner() {
  const url =
    "https://piccache.cnki.net/index/images2009/other/2024/topbanner0";
  const urlId = [1, 2, 3, 4, 5];
  const [newUrlId, setNewUrlId] = useState(1);
  const [isNone, setIsNone] = useState(false);
  return (
    !isNone && (
      <div className="topbanner">
        <img
          src={url + newUrlId + ".jpg"}
          alt="topbanner"
          style={{ width: "100%", height: "100%", display: "block" }}
        />

        <div className="topbanner-controller">
          {urlId.map((item, index) => {
            return (
              <BannerController
                key={index}
                urlId={item}
                newUrlId={newUrlId}
                onmouseover={() => {
                  setNewUrlId(item);
                }}
              />
            );
          })}
        </div>
        <div className={"close-btn"} onClick={() => setIsNone(true)}>
          ×
        </div>
      </div>
    )
  );
}
function BannerController({ urlId, newUrlId, onmouseover }) {
  return (
    <div
      className={`topbanner-controller-item ${newUrlId === urlId ? "new-item" : ""}`}
      onMouseOver={onmouseover}
    ></div>
  );
}
export default TopBanner;
