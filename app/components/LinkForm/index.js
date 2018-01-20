/**
*
* LinkForm
*
*/

import React from 'react';
import classNames from 'classnames';

import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func.isRequired,
    cancelLogin: React.PropTypes.func.isRequired,
  }
  state = {};
  render() {
    return (
      <div className={styles.linkForm}>
        <div className={styles.heading}>
          Add a link
        </div>
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          type="text"
          placeholder="url"
          ref={(f) => { this.urlField = f; }}
        />
        <input
          className={classNames(styles.input, { [styles.inputError]: this.state.errorText })}
          type="text"
          placeholder="description"
          ref={(f) => { this.descriptionField = f; }}
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

export default LinkForm;
