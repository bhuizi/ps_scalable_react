/**
*
* LinkForm
*
*/

import React from 'react';
import TextInput from 'components/TextInput';
import styles from './styles.css';

class LinkForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    login: React.PropTypes.func,
    cancelLogin: React.PropTypes.func,
  }
  state = {};
  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>
            Add a link
          </div>
          <TextInput
            className={styles.input}
            placeholder="URL"
          />
          <TextInput
            className={styles.input}
            placeholder="Description"
          />
          <div className={styles.actionContainer}>
            <button className={styles.button} onClick={this.props.cancelLogin}>
            cancel</button>
            <button className={styles.button} onClick={this.login}>login</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
