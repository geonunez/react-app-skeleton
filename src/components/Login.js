import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

import '../css/Login.css';
import semacticLogo from '../img/semactic-logo.png';

import { userActions } from '../actions';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    }
  }

  /**
   * Handles the inputs' change event.
   *
   * @param {event} e
   */
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  /**
   * Handles the submit event.
   *
   * @param {event} e
   */
  handleSubmit(e) {
    e.preventDefault();

    const { username, password } = this.state;

    this.props.dispatch(userActions.login(username, password));
  }

  /**
   * @override
   */
  render() {
    const { user } = this.props;

    if (user && user.token) {
      return (
        // TODO: check props.location
        <Redirect to='/admin' />
      );
    }

    const {username, password } = this.state;

    return (
      <div className='login'>
        <Grid>
          <Grid.Column>
            <Header as='h2' textAlign='center'>
              <img className='login-logo' src={ semacticLogo } alt='Logo' />
              Log-in to your account
            </Header>
            <Form size='large' onSubmit={ this.handleSubmit.bind(this) }>
              <Segment stacked>
                <Form.Input
                  fluid
                  icon='user'
                  iconPosition='left'
                  name='username'
                  placeholder='Username'
                  value= { username }
                  onChange={ this.handleChange.bind(this) }
                />
                <Form.Input
                  fluid
                  icon='lock'
                  iconPosition='left'
                  name='password'
                  placeholder='Password'
                  type='password'
                  value= { password }
                  onChange={ this.handleChange.bind(this) }
                />
                <Button fluid size='large'>Log in</Button>
              </Segment>
            </Form>
            <Message className='login-signup'>
              New with us?
              <Link to='/signup'> Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  let { user } = state;
  return { user };
}

export default connect(mapStateToProps)(Login);
