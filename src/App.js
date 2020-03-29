import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container, Divider } from "rsuite";

import SidebarNav from "./components/SideNavBar";

import "./styles/App.css";
// import "./styles/theme.css";
import "rsuite/dist/styles/rsuite-default.css";

import Routes from "./constants/routes";

function Admin() {
  return <h1>Admin</h1>;
}

function Home() {
  return <h1>Home</h1>;
}

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
          </Switch>
        </Container>
      </Container>
    </div>
  );
}

export default App;
