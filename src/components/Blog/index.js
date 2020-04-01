import React from "react";

import { connect } from "react-redux";
import { Grid, Panel } from "rsuite";
import "./Blog.css";

class Blog extends React.Component {
  render() {
    const { posts } = this.props;
    return (
      <div>
        <h1>Blog</h1>
        <Grid fluid>
          {posts &&
            Object.entries(posts).map((t, k) => (
              <PostView key={t[0]} post={t[1]} />
            ))}
        </Grid>
      </div>
    );
  }
}

const PostView = ({ post }) => {
  return (
    <Panel shaded bordered bodyFill>
      <img src='https://via.placeholder.com/1920x1080' alt='' />
      <Panel header={post.title}>
        <p>
          <small>{post.content}</small>
        </p>
      </Panel>
    </Panel>
  );
};

const mapStateToProps = state => {
  return {
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps)(Blog);
