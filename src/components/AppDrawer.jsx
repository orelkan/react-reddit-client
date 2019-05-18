/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { PropTypes } from 'prop-types';
import { Drawer, List, ListItem, ListItemText, 
  ListItemIcon } from '@material-ui/core';
import { InvertColors, InvertColorsOff } from '@material-ui/icons';

const root = css`
  width: 250px;
`;

function AppDrawer({open, onClose, onSelection}) {
  return (
    <Drawer open={open} onClose={onClose}>
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
    </Drawer>
  );
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default AppDrawer;