import React from 'react';
import { Dialog, DialogTitle, DialogContent, 
  DialogContentText, DialogActions, Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import { githubLink } from '../consts';


function AboutModal({open, onClose}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        About
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          Personal project by Orel Kanditan <br/>
          Made using React, Material UI and Emotion <br/>
          See the source code on {' '}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary" autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

AboutModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default AboutModal;