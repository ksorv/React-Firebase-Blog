import React from "react";
import Header from "./Header";

import { Redirect, useLocation } from "react-router-dom";

import { connect } from "react-redux";

import { Container } from "rsuite";

function Admin(props) {
  const { isAuthenticated } = props;
  const url = useLocation();
  return (
    <div>
      <Container style={{ padding: 10 }}>
        {isAuthenticated && isAuthenticated ? (
          <Dashboard url={url} />
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

const Dashboard = props => (
  <React.Fragment>
    <Header url={props.url} />
    <p>Admin hu m</p>
  </React.Fragment>
);

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated
  };
}

export default connect(mapStateToProps)(Admin);
