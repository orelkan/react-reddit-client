/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { useState } from "react";
import { PropTypes } from 'prop-types';
import { SwipeableDrawer, List, ListItem, 
  ListItemText, ListItemIcon, Typography, Divider,
  FormControlLabel, Switch } from '@material-ui/core';
import { InvertColors, InvertColorsOff, Info } from '@material-ui/icons';
import AboutModal from './AboutModal';
import { useExpand } from "../shared/ExpandProvider";

const root = css`
  width: 250px;
`;
const title = css`
  margin: 0.5em;
`;
const autoExpandListItem = css`
  height: 3em;
`;
const formControlLabel = css`
  .label {
    font-size: 1rem;
    margin-left: 8px;
  }
`;

function AppDrawer({open, onOpen, onClose, onSelection}) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const [autoExpand, setAutoExpand] = useExpand();

  function handleExpandSwitch() {
    onClose();
    setAutoExpand(!autoExpand);
  }

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
          <ListItem button css={autoExpandListItem}>
            <FormControlLabel
              css={formControlLabel}
              classes={{label: 'label'}}
              control={
                <Switch checked={autoExpand} 
                  onChange={handleExpandSwitch} />
              }
              label="Auto Expand"/>
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

AppDrawer.whyDidYouRender = true;

export default AppDrawer;