const expandIt = () => {
  return {
    type: "EXPAND_SIDENAV"
  };
};

export const expandornot = () => dispatch => {
  dispatch(expandIt());
};
