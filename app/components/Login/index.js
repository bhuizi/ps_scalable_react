/**
*
* Login
*
*/

import React from 'react';
import validator from 'email-validator';
import styles from './styles.css';

class Login extends React.Component { // eslint-disable-line react/prefer-stateless-function
  login = () => {
    const email = this.emailField.value;
    if (!validator.validate(email)) {
      console.error('not a valid email');
    }
  }
  render() {
    return (
      <div className={styles.login}>
        <div className={styles.heading}>
          Login with your email
        </div>
        <input
          className={styles.input}
          type="text"
          placeholder="your email"
          ref={(f) => { this.emailField = f; }}
        />
        <div className={styles.actionContainer}>
          <button className={styles.button}>
          cancel</button>
          <button className={styles.button} onClick={this.login}>login</button>
        </div>
      </div>
    );
  }
}

export default Login;
