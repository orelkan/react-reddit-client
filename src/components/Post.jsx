import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';
import Votes from './Votes';

const styles = {
  card: {
    minWidth: 275,
    margin: '1em auto'
  },
  title: {
    margin: 'auto 0',
  },
  cardContent: {
    display: 'flex'
  }
};

function Post(props) {
  const { classes, post } = props;
  const postLink = `http://www.reddit.com${post.permalink}`;

  return (
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>
        <Votes votes={post.ups}/>
          <Typography variant="h5" component="h2" className={classes.title}>
            <a href={postLink} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a> 
          </Typography>
      </CardContent>
    </Card>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default withStyles(styles)(Post);