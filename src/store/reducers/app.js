export default (
  state = {
    expanded: true
  },
  action
) => {
  if (action.type === "EXPAND_SIDENAV") {
    return {
      expanded: !state.expanded
    };
  } else {
    return state;
  }
};
