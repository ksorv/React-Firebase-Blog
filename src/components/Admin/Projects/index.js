import React from "react";
import CreateProject from "./CreateProject";
import { Drawer, Button } from "rsuite";

class Projects extends React.Component {
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
        <h1>Projects</h1>

        <Button onClick={this.close} appearance='primary'>
          Create New Project
        </Button>
        <Drawer
          full
          placement='bottom'
          show={this.state.show}
          onHide={this.close}
        >
          <Drawer.Header>
            <Drawer.Title>Create a new Project</Drawer.Title>
          </Drawer.Header>
          <Drawer.Body>
            <CreateProject />
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

export default Projects;
