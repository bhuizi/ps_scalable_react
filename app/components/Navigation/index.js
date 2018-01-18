/**
*
* Navigation
*
*/

import React from 'react';
import AppBar from 'components/AppBar';
import Drawer from 'components/Drawer';
import styles from './styles.css';


function Navigation({ topics, selectTopic, toggleDrawer, isDrawerOpen, email }) {
  return (
    <div className={styles.navigation}>
      <AppBar
        toggleDrawer={toggleDrawer}
        email={email}
      />
      <Drawer
        items={topics}
        selectItem={selectTopic}
        itemLabelAttr="name"
        itemKeyAttr="name"
        isDrawerOpen={isDrawerOpen}
      />
    </div>
  );
}

Navigation.propTypes = {
  topics: React.PropTypes.arrayOf(
    React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      description: React.PropTypes.string.isRequired,
    })
  ).isRequired,
  selectTopic: React.PropTypes.func.isRequired,
  toggleDrawer: React.PropTypes.func.isRequired,
  isDrawerOpen: React.PropTypes.bool.isRequired,
  email: React.PropTypes.string,
};
export default Navigation;
