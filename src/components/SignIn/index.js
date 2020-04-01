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
  ControlLabel,
  Message
} from "rsuite";

import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { loginUser } from "../../store/actions";

const INIT_STATE = {
  email: "",
  password: "",
  error: null
};

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...INIT_STATE };

    this.onSubmit = this.onSubmit.bind(this);
  }

  handleChange = event => {
    this.setState({ email: event.email, password: event.password });
  };

  onSubmit = event => {
    const { email, password } = this.state;
    const { dispatch } = this.props;
    dispatch(loginUser(email, password));
  };

  render() {
    const { loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to='/god/' />;
    } else {
      return (
        <Container>
          <Header>
            <Navbar appearance='subtle'>
              <Navbar.Header />
            </Navbar>
          </Header>
          <Content>
            <FlexboxGrid justify='center' align='middle'>
              <FlexboxGrid.Item
                colspan={12}
                style={{ border: "3px solid #f0e3ff" }}
              >
                <Panel
                  header={<h3 style={{ color: "#916dd5" }}>Login</h3>}
                  bordered
                >
                  <Form
                    fluid
                    onChange={this.handleChange}
                    onSubmit={this.onSubmit}
                  >
                    <FormGroup>
                      <ControlLabel>Username or email address</ControlLabel>
                      <FormControl name='email' />
                    </FormGroup>
                    <FormGroup>
                      <ControlLabel>Password</ControlLabel>
                      <FormControl name='password' type='password' />
                    </FormGroup>
                    <FormGroup>
                      <ButtonToolbar>
                        <Button
                          appearance='subtle'
                          color='violet'
                          onClick={this.onSubmit}
                        >
                          Sign in
                        </Button>
                      </ButtonToolbar>
                    </FormGroup>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
              {loginError && (
                <Message
                  style={{
                    background: "#d89cf6",
                    color: "black",
                    fontWeight: 400,
                    fontSize: 16,
                    textAlign: "center"
                  }}
                  full
                  type='error'
                  description={"Oops! " + loginError}
                />
              )}
            </FlexboxGrid>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Don't even try, if you haven't talked to me yet. DM me on Insta or
            E-mail me.
          </Footer>
        </Container>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(SignIn);
