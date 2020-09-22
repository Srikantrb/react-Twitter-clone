import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  // console.log(posts);
  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h3>Home</h3>
      </div>
      {/* Tweet  Box */}
      <TweetBox />

      {/* Post */}
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

      {/* <Post
        displayname="Srikanth "
        username="srikantrb"
        verified={true}
        text="This is test app"
        image="/gan.jpg"
        avatar="/sun.jpg"
      /> */}

      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
      {/* Post */}
    </div>
  );
}

export default Feed;
