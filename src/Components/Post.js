import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ displayname, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post_avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post_body">
        <div className="post_header">
          <div className="post_headertext">
            <h3>
              {displayname}
              <span className="post_headerspecial">
                {verified && <VerifiedUserIcon className="post_badge" />} @{" "}
                {username}
              </span>
            </h3>
          </div>
          <div className="post_headerdesc">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=""></img>
        <div className="post_footer">
          <ChatBubbleOutlineIcon
            fontSize="small"
            className="post_footericons"
          />
          <RepeatIcon fontSize="small" className="post_footericons" />
          <FavoriteBorderIcon fontSize="small" className="post_footericons" />
          <PublishIcon fontSize="small" className="post_footericons" />
        </div>
      </div>
    </div>
  );
}

export default Post;
