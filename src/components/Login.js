import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, Form, Grid, Header, Message, Segment } from 'semantic-ui-react';

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
      <div className='login main-container'>
        <Grid>
          <Grid.Column>
            <Header as='h2' textAlign='center'>Authenticate</Header>
            { this.renderErrorMessage() }
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
          </Grid.Column>
        </Grid>
      </div>
    );
  }

  renderErrorMessage() {
    let { user } = this.props;

    if (user && user.hasError) {
      return (
        <Message error>
          { user.errorMessage }
        </Message>
      );
    }
  }
}

/**
 * Adds to props values from state.
 *
 * @param {object} state
 */
/**
 * Injects from the store to component's props
 */
function mapStateToProps(state) {
  let { user } = state;
  return { user };
}

export default connect(mapStateToProps)(Login);
