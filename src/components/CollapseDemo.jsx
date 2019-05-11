import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Collapse from '@material-ui/core/Collapse';

const styles = theme => ({
  root: {
    // height: 180,
  },
  container: {
    // display: 'flex',
  },
});

class SimpleCollapse extends React.Component {
  state = {
    checked: false,
  };

  handleChange = () => {
    this.setState(state => ({ checked: !state.checked }));
  };

  render() {
    const { classes } = this.props;
    const { checked } = this.state;

    return (
      <div className={classes.root}>
        <Switch checked={checked} onChange={this.handleChange} aria-label="Collapse" />
        <div className={classes.container}>
          <Collapse in={checked}>
            <img src='https://a.thumbs.redditmedia.com/D-wO5UJfoSF7OI-qnG9XhZkflGgES-PmE7icrhklB00.jpg'/>
          </Collapse>
        </div>
      </div>
    );
  }
}

SimpleCollapse.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCollapse);
