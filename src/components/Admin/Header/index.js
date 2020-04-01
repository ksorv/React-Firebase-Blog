import { withHooksHOC } from "../../SideNavBar/withHooksHOC";

import React from "react";
import { Link } from "react-router-dom";

import { Nav, Icon } from "rsuite";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      url: null
    };
  }
  componentDidMount() {
    this.setState({ url: this.props.url });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.url !== this.props.url) {
      this.setState({ url: this.props.url });
    }
  }
  render() {
    return (
      <div className='admin-header'>
        <Nav appearance='tabs' justified>
          <NavLink
            icon={<Icon icon='newspaper-o' />}
            to='/god/posts'
            url={this.state.url}
          >
            Posts
          </NavLink>
          <NavLink
            icon={<Icon icon='wrench' />}
            to='/god/projects'
            url={this.state.url}
          >
            Projects
          </NavLink>
          <NavLink
            icon={<Icon icon='universal-access' />}
            to='/god/whatever'
            url={this.state.url}
          >
            UA
          </NavLink>
        </Nav>
      </div>
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

export default withHooksHOC(Header);
