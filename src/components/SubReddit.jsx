import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import _ from 'lodash';
import { Typography, CircularProgress, withStyles } from '@material-ui/core';
import Post from './Post';
import './Reddit.css';

const styles = theme => ({
  progress: {
    width: '8em !important',
    height: '8em !important',
    position: 'relative',
    left: 'calc(50% - 4em)',
    marginTop: '3em'
  }
});

function SubReddit(props) {
  const [posts, setPosts] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios.get(`https://www.reddit.com/r/${props.subreddit}.json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data.data.children.map(obj => obj.data);
        const sortedPosts = _(posts).sortBy('ups').reverse().value();
        setPosts(sortedPosts);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setPosts(null);
      });
  }, [props.subreddit]);

  const ErrorDisplay = props => (
    <Typography variant="h3" gutterBottom>
      Error Occured: {props.error.message}
    </Typography>
  );

  const { classes } = props;
  const isLoading = error == null && posts == null;
  return (
    <div className='sub-reddit'>
      <Typography variant="h2" gutterBottom>
        {`/r/${props.subreddit}`}
      </Typography>
      {isLoading && <CircularProgress className={classes.progress}/>}
      {posts && 
      posts.map(post => <Post post={post} key={post.id}/>)}
      {error && <ErrorDisplay error={error}/>}
    </div>
  );
}

SubReddit.propTypes = {
  subreddit: PropTypes.string.isRequired
}

export default withStyles(styles)(SubReddit);