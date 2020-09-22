import React, { useState } from "react";
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
import db from "./firebase";

function TweetBox() {
  const [tweetmessage, setTweetmessage] = useState("");
  const [imageurl, setImageurl] = useState("");

  const handleTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayname: "Srikanth",
      username: "srikantrb",
      verified: true,
      text: tweetmessage,
      image: imageurl,
      avatar: "/sun.jpg",
    });

    setTweetmessage("");
    setImageurl("");
  };

  return (
    <div className="tweetbox">
      <form>
        <div className="tweetbox_input">
          <Avatar src="" />
          <input
            placeholder="Whats happening ?"
            value={tweetmessage}
            onChange={(e) => setTweetmessage(e.target.value)}
            type="text"
          ></input>
        </div>
        <input
          placeholder="Enter image url"
          value={imageurl}
          onChange={(e) => setImageurl(e.target.value)}
          className="tweetbox_inputimage"
          type="text"
        ></input>

        <Button
          className="tweetbox_tweetbtn"
          onClick={handleTweet}
          type="submit"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
