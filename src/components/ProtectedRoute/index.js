import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}) => {
  console.log("routing");
  return (
    <Route
      {...rest}
      render={props =>
        isVerifying ? (
          <div>Loading...</div>
        ) : isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/god/signin",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default ProtectedRoute;