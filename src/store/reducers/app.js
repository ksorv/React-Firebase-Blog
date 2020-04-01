export default (
  state = {
    expanded: false
  },
  action
) => {
  if (action.type === "EXPAND_SIDENAV") {
    return {
      expanded: action.expansion
    };
  } else {
    return state;
  }
};
