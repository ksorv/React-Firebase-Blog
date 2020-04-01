import firebase from "../../Firebase/firebase";

export const ProjectManager = {
  saveProjects: "SAVE_PROJECTS",
  requestProjects: "REQUEST_PROJECTS",
  updateProject: "UPDATE_PROJECT",
  foundError: "FOUND_ERROR"
};
const saveProjects = projects => {
  return {
    type: ProjectManager.saveProjects,
    projects
  };
};

const requestProjects = () => {
  return {
    type: ProjectManager.requestProjects
  };
};
// eslint-disable-next-line
const updateProject = project => {
  return {
    type: ProjectManager.updateProject,
    project
  };
};

const foundError = err => {
  return {
    type: ProjectManager.foundError,
    err
  };
};

export const projectFetcher = () => dispatch => {
  dispatch(requestProjects());
  firebase
    .firestore()
    .collection("projects")
    .where("published", "==", true)
    .get()
    .then(querySnapshot => {
      var projects = {};
      querySnapshot.forEach(doc => {
        projects[doc.id] = doc.data();
      });
      dispatch(saveProjects(projects));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(foundError(error));
    });
};

export const AdminProjectFetcher = () => dispatch => {
  dispatch(requestProjects());
  firebase
    .firestore()
    .collection("projects")
    .get()
    .then(querySnapshot => {
      var projects = {};
      querySnapshot.forEach(doc => {
        projects[doc.id] = doc.data();
      });
      dispatch(saveProjects(projects));
    })
    .catch(error => {
      //Do something with the error if you want!
      dispatch(foundError(error));
    });
};
