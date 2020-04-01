import React from "react";

import { connect } from "react-redux";
import { Grid, Panel } from "rsuite";
import "./Projects.css";

class Blog extends React.Component {
  render() {
    const { projects } = this.props;
    return (
      <div>
        <h1>Blog</h1>
        <Grid fluid>
          {projects &&
            Object.entries(projects).map((t, k) => (
              <ProjectView key={t[0]} project={t[1]} />
            ))}
        </Grid>
      </div>
    );
  }
}

const ProjectView = ({ project }) => {
  return (
    <Panel shaded bordered bodyFill>
      <img src='https://via.placeholder.com/1920x1080' alt='' />
      <Panel header={project.title}>
        <p>
          <small>{project.content}</small>
        </p>
      </Panel>
    </Panel>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.projects.projects
  };
};

export default connect(mapStateToProps)(Blog);
