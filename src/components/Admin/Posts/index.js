import React from "react";
import CreatePost from "./CreatePost";

class Posts extends React.Component {
  render() {
    return (
      <div>
        <h1>Posts</h1>
        <CreatePost />
      </div>
    );
  }
}

export default Posts;
