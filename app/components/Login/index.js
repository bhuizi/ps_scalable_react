/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import TextInput from 'components/TextInput';
import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  }
  state = {};

  login = () => {
    const email = this.emailField.value();
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

    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <TextInput
          type="text"
          errorText={this.state.errorText}
          placeholder="your email"
          ref={(f) => { this.emailField = f; }}
        />
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
