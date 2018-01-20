/**
*
* LinkList
*
*/

import React from 'react';
import Link from 'components/Link';
import styles from './styles.css';

function LinkList({ links, topicName, children }) {
  const linkNodes = links.map(l => (
    <Link
      key={l.id}
      link={l}
    />
  ));
  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      {children}
    </div>
  );
}

LinkList.propTypes = {
  topicName: React.PropTypes.string,
  children: React.PropTypes.element,
  links: React.PropTypes.arrayOf(React.PropTypes.shape({
    description: React.PropTypes.string.isRequired,
    url: React.PropTypes.string.isRequired,
    id: React.PropTypes.string.isRequired,
  })),
};
export default LinkList;
