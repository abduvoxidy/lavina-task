import { Link } from "react-router-dom";
import Profile from "../Profile";
import { FC } from "react";

import "./Header.scss";

const Header: FC = () => {
  return (
    <div className="header">
      <Link to="/">
        <h2>Kutubxona</h2>
      </Link>
      <Profile />
    </div>
  );
};

export default Header;
