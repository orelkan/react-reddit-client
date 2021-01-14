import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Autocomplete from '@material-ui/lab/Autocomplete';
import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/ArrowRightAlt';
import { redditUrl } from '../../consts';
import axios from 'axios';

const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 120,
      '&:focus': {
        width: 200,
      },
    },
  },
  toolbar: {
    minHeight: '52px'
  }
});

function AppBar(props) {
  const { classes } = props;

  const [options, setOptions] = useState([]);

  function getOptions(query) {
    axios
      .get(`${redditUrl}/api/search_reddit_names.json?query=${query}`)
      .then(res => {
        setOptions(res.data.names);
      })
      .catch(err => {
        setOptions([]);
      });
  }

  function handleKeyPress(event) {
    if (event.key === 'Enter') {
      window.scrollTo(0, 0);
      props.onSubredditChange(event);
    }
  }
  
  return (
    <div className={classes.root}>
      <MuiAppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton onClick={props.onMenuClick} 
            className={classes.menuButton} 
            color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} 
            variant="h6" color="inherit" noWrap>
            React Reddit Client
          </Typography>
          <div className={classes.grow} />
          <Autocomplete 
            id="subreddit-textbox"
            options={options}
            onInputChange={(event, value, reason) => {
              if (reason === 'input') {
                getOptions(value);
              }
            }}
            getOptionSelected={(option, value) => option.toLowerCase() === value.toLowerCase()}
            renderInput={(params) => 
              <div className={classes.search} ref={params.InputProps.ref}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  {...params.inputProps}
                  placeholder="Go to subreddit"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onKeyPress={handleKeyPress}
                />
              </div>
            }
          />
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

AppBar.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubredditChange: PropTypes.func.isRequired,
  onMenuClick: PropTypes.func.isRequired,
};

AppBar.whyDidYouRender = true;

export default withStyles(styles)(AppBar);
