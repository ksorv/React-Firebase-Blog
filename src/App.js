import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Divider } from "rsuite";

import Admin from "./components/Admin";
import SidebarNav from "./components/SideNavBar/index";
import Blog from "./components/Blog";
// import CreateProject from "./components/CreateProject";
import Home from "./components/Home";
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
        <Container style={{ display: "flex" }}>
          <Switch>
            <Route path={Routes.Admin}>
              <Admin />
            </Route>
            <Route path={Routes.Home}>
              <Home />
            </Route>
            <Route path={Routes.Blog}>
              <Blog />
            </Route>
            <Route path={Routes.Projects}>
              <Projects />
            </Route>
            <Route path={Routes.LookMeUp}>
              <LookMeUp />
            </Route>
          </Switch>
        </Container>
      </Container>
    </div>
  );
}

export default App;
