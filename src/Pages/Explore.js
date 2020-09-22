import React, { useState, useEffect } from "react";
import "./Explore.css";
import SearchIcon from "@material-ui/icons/SearchOutlined";
import Post from "../Components/Post";
import db from "../Components/firebase";
import Widgets from "../Components/Widgets";

function Profile() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="explore">
      {/* <h2>explore Page</h2> */}

      {/* Search bar */}

      <div className="explore_feed">
        <div className="explore_input">
          <SearchIcon className="explore_searchicon" />
          <input type="text" placeholder="Search Twitter"></input>
        </div>
        <hr />
        {/* Feed */}
        {posts.map((post) => (
          <Post
            key={post.text}
            displayname={post.displayname}
            username={post.username}
            verified={post.verified}
            text={post.text}
            image={post.image}
            avatar="/sun.jpg"
          />
        ))}
      </div>
      <div className="explore_widgets">
        <Widgets />
      </div>
    </div>
  );
}

export default Profile;
