import React from "react";
import ManShopping from "./../../assets/img/manShopping.jpg";
import WomanShopping from "./../../assets/img/womanShopping.jpg";
const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{ backgroundImage: `url(${WomanShopping})` }}
        ></div>

        <div style={{ backgroundImage: `url(${ManShopping})` }}></div>
      </div>
    </div>
  );
};

export default Directory;
