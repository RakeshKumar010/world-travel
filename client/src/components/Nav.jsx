import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navMain">
      <img
        src="https://images.vexels.com/media/users/3/301533/isolated/lists/4bc8be7c6b9dff24ef67de95d4509872-gradient-letter-g-alphabet.png"
        alt="logo"
        className="logoImg"
      />
      <ul className="ulNav">
        <li>
          <Link to={"/home"}>HOME</Link>
        </li>
        <li>
          <Link to={"/packages"}>PACKAGES</Link>
        </li>
        <li>
          <Link to={"/about"}>ABOUT US</Link>
        </li>
        <li id="loginRoute">
          <Link to={"/login"}>LOGIN</Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
