import React from "react";
import CreatePost from "./CreatePost";
import { Drawer, Button } from "rsuite";

class Posts extends React.Component {
  constructor() {
    super();

    this.state = { show: false };
    this.close = this.close.bind(this);
  }

  close() {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>

        <Button onClick={this.close} appearance='primary'>
          Create New Post
        </Button>

        <Drawer
          full
          placement='bottom'
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Create a new Post</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <CreatePost />
          </Drawer.Body>
          {/* <Drawer.Footer>
            <Button onClick={this.close} appearance='primary'>
              Confirm
            </Button>
            <Button onClick={this.close} appearance='subtle'>
              Cancel
            </Button>
          </Drawer.Footer> */}
        </Drawer>
      </div>
    );
  }
}

export default Posts;
