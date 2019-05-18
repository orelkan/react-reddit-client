/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from 'prop-types';
import { SwipeableDrawer, List, ListItem, ListItemText, 
  ListItemIcon } from '@material-ui/core';
import { InvertColors, InvertColorsOff } from '@material-ui/icons';

const root = css`
  width: 250px;
`;

function AppDrawer({open, onClose, onSelection}) {
  return (
    <SwipeableDrawer open={open} onClose={onClose}>
      <div css={root}>
        <List>
          <ListItem button onClick={() => onSelection('light')}>
            <ListItemIcon><InvertColors/></ListItemIcon>
            <ListItemText primary='Light theme'/>
          </ListItem>
          <ListItem button onClick={() => onSelection('dark')}>
            <ListItemIcon><InvertColorsOff/></ListItemIcon>
            <ListItemText primary='Dark theme'/>
          </ListItem>
        </List>
      </div>
    </SwipeableDrawer>
  );
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default AppDrawer;