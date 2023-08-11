/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import {
  Avatar,
  Divider,
  IconButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import { Link } from "react-router-dom";
import { destroyCookie } from "nookies";
import { FC, MouseEvent } from "react";
import LocalStorage from "../../utils/LocalStorage";

const Profile: FC = () => {
  const userData = LocalStorage.get("userData");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    LocalStorage.remove("userData");
    LocalStorage.set("isAuth", false);
    destroyCookie(null, "userKey");
    destroyCookie(null, "userSecret");
    location.reload();
  };

  return (
    <div className="profile">
      <IconButton
        onClick={handleClick}
        size="small"
        sx={{ ml: 2 }}
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
      >
        <Avatar sx={{ bgcolor: "green" }}>
          {userData?.name?.charAt(0).toUpperCase() || "A"}
        </Avatar>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Link to="/my-library">
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <LibraryBooksIcon fontSize="small" />
            </ListItemIcon>
            Mening kutubxonam
          </MenuItem>
        </Link>
        <Divider />
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Chiqish
        </MenuItem>
      </Menu>
    </div>
  );
};

export default Profile;
