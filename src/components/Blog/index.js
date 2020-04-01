import React from "react";

import { connect } from "react-redux";

class Blog extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Blog</h1>
        {posts.map(post => (
          <PostView key={post.id} post={post} />
        ))}
      </div>
    );
  }
}

const PostView = ({ post }) => (
  <div>
    <p>title: {post.title}</p>
    <p>content: {post.content}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(Blog);
