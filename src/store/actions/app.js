const expandIt = expansion => {
  return {
    type: "EXPAND_SIDENAV",
    expansion
  };
};

export const expand = expansion => dispatch => {
  dispatch(expandIt(expansion));
};
