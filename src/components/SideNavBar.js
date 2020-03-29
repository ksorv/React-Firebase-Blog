import React from "react";

import { Sidenav, Nav, Icon, Navbar, Dropdown, Sidebar } from "rsuite";

import { Link } from "react-router-dom";
import Routes from "../constants/routes";

const headerStyles = {
  padding: 13,
  fontSize: 24,
  height: 56,
  color: " #000",
  background: "#ffa",
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

class Page extends React.Component {
  constructor() {
    super();

    this.state = {
      expand: true,
      activeKey: "1"
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
        width={expand ? 260 : 56}
        expand={expand}
        collapsible
      >
        <Sidenav.Header>
          <div style={headerStyles}>
            <Icon icon='beer' size='2x' style={{ verticalAlign: 0 }} />
            <span style={{ marginLeft: 15 }}>ksorv</span>
          </div>
        </Sidenav.Header>
        <Sidenav
          onSelect={this.handleSelect}
          expand={expand}
          defaultOpenKeys={["3"]}
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
                activekey={this.state.activeKey}
              >
                Home
              </NavLink>
              <NavLink
                eventKey='2'
                active
                icon={<Icon icon='newspaper-o' />}
                to={Routes.Blog}
                activekey={this.state.activeKey}
              >
                Blog
              </NavLink>
              <NavLink
                eventKey='3'
                active
                icon={<Icon icon='wrench' />}
                to={Routes.Projects}
                activekey={this.state.activeKey}
              >
                Projects
              </NavLink>
              <NavLink
                eventKey='4'
                active
                icon={<Icon icon='code' />}
                to={Routes.Setup}
                activekey={this.state.activeKey}
              >
                My Setup
              </NavLink>
              <NavLink
                eventKey='5'
                active
                icon={<Icon icon='binoculars' />}
                to={Routes.FindMe}
                activekey={this.state.activeKey}
              >
                Look Me Up
              </NavLink>
              {/* <Dropdown
                    eventKey='5'
                    trigger='hover'
                    title='Contact Me'
                    icon={<Icon icon='universal-access' />}
                    placement='rightStart'
                  >
                    <Dropdown.Item eventKey='4-1'>Applications</Dropdown.Item>
                    <Dropdown.Item eventKey='4-2'>Websites</Dropdown.Item>
                    <Dropdown.Item eventKey='4-3'>Channels</Dropdown.Item>
                    <Dropdown.Item eventKey='4-4'>Tags</Dropdown.Item>
                    <Dropdown.Item eventKey='4-5'>Versions</Dropdown.Item>
                  </Dropdown> */}
            </Nav>
          </Sidenav.Body>
        </Sidenav>
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
      active={props.activekey === props.eventKey}
      componentClass={Link}
    />
  );
});

export default Page;
