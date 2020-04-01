import React from "react";
import { connect } from "react-redux";
// import { createProject } from "../../../store/actions/projectActions";
// import { Button } from "rsuite";
import CreateProject from "./CreateProject";

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <CreateProject />
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createProject: project => dispatch(createProject(project))
//   };
// };

export default Projects;
