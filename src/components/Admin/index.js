import React from "react";
import Header from "./Header";

import { Route, Redirect, useLocation, Switch } from "react-router-dom";

import ProtectedRoute from "../ProtectedRoute";
import { connect } from "react-redux";

import { Container } from "rsuite";

import Posts from "./Posts";
import Projects from "./Projects";

function Admin(props) {
  const { isAuthenticated, isVerifying } = props;
  const url = useLocation();
  return (
    <div>
      <Container style={{ padding: 10 }}>
        {isAuthenticated && isAuthenticated ? (
          <React.Fragment>
            <Header url={url.pathname} />
            <Switch>
              <Route
                path='/god/posts'
                component={Posts}
                // isAuthenticated={props.isAuthenticated}
                // isVerifying={props.isVerifying}
              />
              <Route
                path='/god/projects'
                component={Projects}
                // isAuthenticated={props.isAuthenticated}
                // isVerifying={props.isVerifying}
              />
            </Switch>
          </React.Fragment>
        ) : (
          <Redirect
            to={{
              pathname: "/god/signin",
              state: { from: props.location }
            }}
          />
        )}
      </Container>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(Admin);
