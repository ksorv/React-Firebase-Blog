import React from "react";
import {
  Container,
  Header,
  Navbar,
  Content,
  FlexboxGrid,
  Panel,
  Form,
  FormGroup,
  FormControl,
  ButtonToolbar,
  Button,
  Footer,
  ControlLabel
} from "rsuite";

const loggedIn = false;
class Admin extends React.Component {
  render() {
    let show;
    if (loggedIn) {
      show = <Work />;
    } else {
      show = <Login />;
    }
    return <div>{show}</div>;
  }
}

const Work = () => <p>Logged in</p>;
const Login = () => (
  <Container>
    <Header>
      <Navbar appearance='inverse'>
        <Navbar.Header>
          <a className='navbar-brand logo' href='/home'>
            Brand
          </a>
        </Navbar.Header>
      </Navbar>
    </Header>
    <Content>
      <FlexboxGrid justify='center'>
        <FlexboxGrid.Item colspan={12}>
          <Panel header={<h3>Login</h3>} bordered>
            <Form fluid>
              <FormGroup>
                <ControlLabel>Username or email address</ControlLabel>
                <FormControl name='name' />
              </FormGroup>
              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl name='password' type='password' />
              </FormGroup>
              <FormGroup>
                <ButtonToolbar>
                  <Button appearance='primary'>Sign in</Button>
                  <Button appearance='link'>Forgot password?</Button>
                </ButtonToolbar>
              </FormGroup>
            </Form>
          </Panel>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </Content>
    <Footer>Footer</Footer>
  </Container>
);

export default Admin;
