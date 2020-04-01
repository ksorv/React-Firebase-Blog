import { ProjectManager } from "../actions/";

export default (
  state = {
    isFetchingProjects: false,
    isUpdatingProject: false,
    projectError: false,
    hasFetched: false,
    projects: {}
  },
  action
) => {
  switch (action.type) {
    case ProjectManager.requestProjects:
      return {
        ...state,
        isFetchingProjects: true,
        projectError: false
      };
    case ProjectManager.saveProjects:
      return {
        ...state,
        isFetchingProjects: false,
        hasFetched: true,
        projectError: false,
        projects: action.projects
      };
    default:
      return state;
  }
};
