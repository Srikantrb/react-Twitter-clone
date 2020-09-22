import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
//Icons Components from material ui
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      {/* twitteer Logo */}
      <Link to="/">
        <TwitterIcon className="sidebar_twittericon" />
      </Link>
      {/* SidebarOption  */}

      <NavLink to="/" className="link" exact activeStyle={{ color: "#50b7f5" }}>
        <SidebarOption Icon={HomeIcon} text="Home" active={false} />
      </NavLink>
      <NavLink
        to="/explore"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={SearchIcon} text="Explore" />
      </NavLink>
      <NavLink
        to="notifications"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      </NavLink>
      <NavLink
        to="messages"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      </NavLink>
      <NavLink
        to="bookmarks"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      </NavLink>
      <NavLink
        to="lists"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={ListAltIcon} text="Lists" />
      </NavLink>
      <NavLink
        to="profile"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
      </NavLink>
      <NavLink
        to="more"
        className="link"
        exact
        activeStyle={{ color: "#50b7f5" }}
      >
        <SidebarOption Icon={MoreHorizIcon} text="More" />
      </NavLink>
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}
      {/* SidebarOption  */}

      {/* button --> Tweet*/}
      <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
