import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';
import Votes from './Votes';
import './Reddit.css';

const styles = {
  card: {
    minWidth: 275,
    margin: '1em auto'
  },
  title: {
    margin: 'auto 0',
  },
  cardContent: {
    display: 'flex',
    padding: '0.5em 1em'
  }
};

function Post(props) {
  const { classes, post } = props;
  const postLink = `https://www.reddit.com${post.permalink}`;

  return (
    <div className='post'>
      <Card className={classes.card}>
        <div className={classes.cardContent}>
          <Votes votes={post.ups}/>
            <Typography variant="h5" className={classes.title}>
              <a href={postLink} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a> 
            </Typography>
        </div>
      </Card>
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default withStyles(styles)(Post);