import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import AppBar from './AppBar';
import AppDrawer from './AppDrawer';

function AppBarAndDrawer({onSubredditChange, onSelection}) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  function handleSelection(selected) {
    setDrawerOpen(false);
    onSelection(selected);
  }
  return (
    <React.Fragment>
      <AppBar onSubredditChange={onSubredditChange} 
        onMenuClick={() => setDrawerOpen(true)}/>
      <AppDrawer open={drawerOpen} 
        onSelection={handleSelection}
        onClose={() => setDrawerOpen(false)}/>
    </React.Fragment>
  );
}

AppBarAndDrawer.propTypes = {
  onSelection: PropTypes.func.isRequired,
  onSubredditChange: PropTypes.func.isRequired,
};

export default AppBarAndDrawer;