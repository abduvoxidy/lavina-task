import { Link } from "react-router-dom";
import Profile from "../Profile";
import { FC } from "react";

import "./Navbar.scss";

const Navbar: FC = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <h2>Kutubxona</h2>
      </Link>
      <Profile />
    </div>
  );
};

export default Navbar;
