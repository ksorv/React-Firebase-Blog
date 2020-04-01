import React from "react";

import { connect } from "react-redux";

class Projects extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>Projects</h1>
        {projects.map(project => (
          <ProjectView key={project.id} project={project} />
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
    projects: state.projects.projects
  };
};

export default connect(mapStateToProps)(Projects);
