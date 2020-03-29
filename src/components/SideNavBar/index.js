import React from "react";

import { Sidenav, Nav, Icon, Navbar, Dropdown, Sidebar, Divider } from "rsuite";
import { withHooksHOC } from "./withHooksHOC";
// import { withRouter } from "react-router-dom";

import { Link } from "react-router-dom";
import Routes from "../../constants/routes";

const headerStyles = {
  padding: 13,
  fontSize: 24,
  height: 56,
  color: " #3e206d",
  background: "#fff",
  whiteSpace: "nowrap",
  overflow: "hidden"
};

const iconStyles = {
  width: 56,
  height: 56,
  lineHeight: "56px",
  textAlign: "center"
};

const NavToggle = ({ expand, onChange }) => {
  return (
    <Navbar appearance='subtle' className='nav-toggle'>
      <Navbar.Body>
        <Nav>
          <Dropdown
            placement='topStart'
            trigger='click'
            renderTitle={children => {
              return <Icon style={iconStyles} icon='cog' />;
            }}
          >
            <Dropdown.Item>Tech Used</Dropdown.Item>
            <Dropdown.Item>Dark Mode</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </Nav>

        <Nav pullRight>
          <Nav.Item
            onClick={onChange}
            style={{ width: 56, textAlign: "center" }}
          >
            <Icon icon={expand ? "angle-left" : "angle-right"} />
          </Nav.Item>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      expand: true,
      activeKey: "1",
      url: this.props.url || null
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({ activeKey: eventKey });
  }

  handleToggle() {
    this.setState({
      expand: !this.state.expand
    });
  }

  render() {
    const expand = this.state.expand;

    return (
      <Sidebar
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh"
        }}
        width={expand ? 200 : 56}
        expand={expand}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon icon='beer' size='2x' style={{ verticalAlign: 0 }} />
            <span style={{ marginLeft: 15 }}>ksorv</span>
          </div>
        </Sidenav.Header>
        <Divider style={{ margin: 0 }} />
        <Sidenav
          onSelect={this.handleSelect}
          expand={expand}
          appearance='subtle'
          style={{ overflowY: "auto", flex: "1 1 auto" }}
        >
          <Sidenav.Body style={{ padding: 0 }}>
            <Nav>
              <NavLink
                eventKey='1'
                active
                icon={<Icon icon='home' />}
                to={Routes.Home}
                url={this.state.url}
              >
                Home
              </NavLink>
              <NavLink
                eventKey='2'
                active
                icon={<Icon icon='newspaper-o' />}
                to={Routes.Blog}
                url={this.state.url}
              >
                Blog
              </NavLink>
              <NavLink
                eventKey='3'
                active
                icon={<Icon icon='wrench' />}
                to={Routes.Projects}
                url={this.state.url}
              >
                Projects
              </NavLink>
              <NavLink
                eventKey='4'
                active={this.state.url === Routes.Setup}
                icon={<Icon icon='code' />}
                to={Routes.Setup}
                url={this.state.url}
              >
                My Setup
              </NavLink>
              <NavLink
                eventKey='5'
                active
                icon={<Icon icon='binoculars' />}
                to={Routes.FindMe}
                url={this.state.url}
              >
                Look Me Up
              </NavLink>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <Divider style={{ margin: 0 }} />
        <NavToggle expand={expand} onChange={this.handleToggle} />
      </Sidebar>
    );
  }
}

const NavLink = React.forwardRef((props, ref) => {
  //   const location = useLocation();
  return (
    <Nav.Item
      {...props}
      ref={ref}
      active={props.to === props.url}
      componentClass={Link}
    />
  );
});

export default withHooksHOC(SideNavBar);
