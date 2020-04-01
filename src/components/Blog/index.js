import React from "react";

import { connect } from "react-redux";

class Blog extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Blog</h1>
        {posts &&
          Object.entries(posts).map((t, k) => (
            <PostView key={t[0]} post={t[1]} />
          ))}
      </div>
    );
  }
}

const PostView = ({ post }) => (
  <div>
    <p>author: {post.author}</p>
    <p>content: {post.content}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(Blog);
