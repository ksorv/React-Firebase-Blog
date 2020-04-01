import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { Container } from "rsuite";

import { connect } from "react-redux";
import SignIn from "./components/SignIn";

import ProtectedRoute from "./components/ProtectedRoute";
import Admin from "./components/Admin";
import SidebarNav from "./components/SideNavBar/index";
import Blog from "./components/Blog";
import MySetup from "./components/MySetup";
// import CreateProject from "./components/CreateProject";
import Home from "./components/Home/index";
import LookMeUp from "./components/LookMeUp";
import Projects from "./components/Projects";
// import WritePost from "./components/WritePost";

import Routes from "./constants/routes";

import "./styles/App.css";

import "rsuite/dist/styles/rsuite-default.css";

class App extends React.Component {
  render() {
    const { isAuthenticated, isVerifying, expand } = this.props;
    return (
      <div className='App'>
        <Container>
          <SidebarNav url={this.props.location.pathname} />

          <Container
            className={expand ? "expanded pres-side-bar" : "pres-side-bar"}
            style={{
              marginLeft: 60,
              transition: "margin 500ms"
            }}
          >
            <Switch>
              <Route exact path={Routes.Home} component={Home} />
              <Route path='/god/signin' component={SignIn} />
              <ProtectedRoute
                path='/god'
                component={Admin}
                isAuthenticated={isAuthenticated}
                isVerifying={isVerifying}
              />
              <Route path={Routes.Blog} component={Blog} />
              <Route path={Routes.Projects} component={Projects} />
              <Route path={Routes.Setup} component={MySetup} />
              <Route path={Routes.LookMeUp} component={LookMeUp} />
              <Route component={NoMatch} />
            </Switch>
          </Container>
        </Container>
      </div>
    );
  }
}

const NoMatch = () => <div>Error 404</div>;

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
    expand: state.app.expanded
  };
}

export default connect(mapStateToProps)(withRouter(App));
