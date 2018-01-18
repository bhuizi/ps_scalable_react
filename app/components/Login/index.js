/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import classNames from 'classnames';
import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  }
  state = {};

  login = () => {
    const email = this.emailField.value;
    if (!validator.validate(email)) {
      this.setState({
        errorText: 'please provide a valid email',
      });
      return;
    }
    this.setState({
      errorText: null,
    });
    this.props.login(email);
  }
  render() {
    const fieldError = this.state.errorText ? (
      <div className={styles.errorMessage}>
        {this.state.errorText}
      </div>
    ) : null;

    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          type="text"
          placeholder="your email"
          ref={(f) => { this.emailField = f; }}
        />
        {fieldError}
        <div className={styles.actionContainer}>
          <button className={styles.button} onClick={this.props.cancelLogin}>
          cancel</button>
          <button className={styles.button} onClick={this.login}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;
