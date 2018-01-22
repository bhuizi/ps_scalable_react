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
    addLink: React.PropTypes.func.isRequired,
  }
  state = {
    urlError: '',
    descriptionError: '',
  };
  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;
    if (!url.match(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/)) {
      urlError = 'Please provide a valid URL';
    }

    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }
    this.props.addLink({
      url,
      description,
    });
  };

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
            ref={(f) => { this.url = f; }}
            errorText={this.state.urlError}
          />
          <TextInput
            className={styles.input}
            placeholder="Description"
            ref={(f) => { this.description = f; }}
            errorText={this.state.descriptionError}
          />
          <div className={styles.actionContainer}>
            <button className={styles.button}>
            cancel</button>
            <button className={styles.button} onClick={this.onAdd}>add</button>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
