import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Divider } from "rsuite";

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

function App() {
  return (
    <div className='App'>
      <Container>
        <SidebarNav />
        <Divider style={{ height: "100vh", margin: 0 }} vertical />

        <Container className='main'>
          <Switch>
            <Route exact path={Routes.Home} component={Home} />
            <Route path={Routes.Admin} component={Admin} />
            <Route path={Routes.Blog} component={Blog} />
            <Route path={Routes.Projects} component={Projects} />
            <Route path={Routes.Setup} component={MySetup} />
            <Route path={Routes.LookMeUp} component={LookMeUp} />
          </Switch>
        </Container>
      </Container>
    </div>
  );
}

export default App;
