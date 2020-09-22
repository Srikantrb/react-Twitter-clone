import React from "react";
import "./Widgets.css";
import SearchIcon from "@material-ui/icons/SearchOutlined";

import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchicon" />
        <input type="text" placeholder="Search Twitter"></input>
      </div>
      <div className="widgets_widgetcontainer">
        <h3>What's happening</h3>
        <TwitterTweetEmbed tweetId={"85855177860055040"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="srikanth"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={""}
          options={{ text: "#react js is Good", via: "srikantrb" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
