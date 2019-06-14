/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { SwipeableDrawer, List, ListItem, ListItemText, 
  ListItemIcon, Typography, Divider} from '@material-ui/core';
import { InvertColors, InvertColorsOff, Info } from '@material-ui/icons';
import AboutModal from './AboutModal';

const root = css`
  width: 250px;
`;
const title = css`
  margin: 0.5em;
`;

function AppDrawer({open, onOpen, onClose, onSelection}) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <SwipeableDrawer open={open} onClose={onClose} onOpen={onOpen}>
      <div css={root}>
        <Typography variant='h5' css={title}>
          React Reddit Client
        </Typography>
        <Divider/>
        <List>
          <ListItem button onClick={() => onSelection('light')}>
            <ListItemIcon><InvertColors/></ListItemIcon>
            <ListItemText primary='Light theme'/>
          </ListItem>
          <ListItem button onClick={() => onSelection('dark')}>
            <ListItemIcon><InvertColorsOff/></ListItemIcon>
            <ListItemText primary='Dark theme'/>
          </ListItem>
          <ListItem button onClick={() => setAboutOpen(true)}>
            <ListItemIcon><Info/></ListItemIcon>
            <ListItemText primary='About'/>
          </ListItem>
        </List>
        <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)}/>
      </div>
    </SwipeableDrawer>
  );
}

AppDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default AppDrawer;