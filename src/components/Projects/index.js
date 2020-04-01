import React from "react";

import { connect } from "react-redux";

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>Projects</h1>
        {projects &&
          Object.entries(projects).map((project, k) => (
            <ProjectView key={project[0]} project={project[1]} />
          ))}
      </div>
    );
  }
}

const ProjectView = ({ project }) => (
  <div>
    <p>title: {project.title}</p>
    <p>content: {project.content}</p>
  </div>
);

const mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps)(Projects);
