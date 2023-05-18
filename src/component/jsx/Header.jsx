import React from "react";
import "../styles/header.css";
import chronicle from "../assets/images/svg/chronicle.svg";
const Header = () => {
  return (
    <div>
      <div className="flex">
        <div>
          <img src={chronicle} alt="" />
        </div>
        <div>
          <button type="button">Join Beta</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
