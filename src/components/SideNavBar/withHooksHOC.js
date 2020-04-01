import React from "react";
import { useLocation } from "react-router-dom";

export const withHooksHOC = Component => {
  return props => {
    const location = useLocation();
    return <Component url={location.pathname} {...props} />;
  };
};
