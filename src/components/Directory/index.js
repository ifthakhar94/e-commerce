import React from "react";
import ManShopping from "./../../assets/img/manShopping.jpg";
import WomanShopping from "./../../assets/img/womanShopping.jpg";
import "./styles.css";
const Directory = () => {
  return (
    <div className="directory">
      <div className="wrap">
        <div
          className="item"
          style={{ backgroundImage: `url(${WomanShopping})` }}
        >
          <a href="#">Shop Womens</a>
        </div>

        <div
          className="item"
          style={{ backgroundImage: `url(${ManShopping})` }}
        >
          <a href="#">Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
