/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import axios from "axios";
import { Typography, CircularProgress } from "@material-ui/core";
import Post from "./Post";
import { redditUrl } from '../consts';

const root = css`
  margin: 2em 7%;
`;
const progress = css`
  width: 8em !important;
  height: 8em !important;
  position: relative;
  left: calc(50% - 4em);
  margin-top: 3em;
`;

const ErrorDisplay = props => (
  <Typography variant="h3" gutterBottom>
    Error Occured: {props.error.message}
  </Typography>
);

ErrorDisplay.propTypes = {
  error: PropTypes.object.isRequired
};

function SubReddit(props) {
  const [posts, setPosts] = useState(null);
  const [lastRequestResult, setLastRequestResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const filter = 'top';
  const requestUrl = `${redditUrl}/r/${props.subreddit}/${filter}.json`;
  const requestResToPosts = res => res.data.data.children.map(obj => obj.data);

  useEffect(() => {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios
      .get(requestUrl)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        // const posts = res.data.data.children.map(obj => obj.data);
        const posts = requestResToPosts(res);
        setPosts(posts);
        setLastRequestResult(res.data);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setPosts(null);
      });
  }, [props.subreddit, requestUrl]);
  
  useEffect(() => {
    if (loadingMore) {
      const after = lastRequestResult.after;
      axios
        .get(requestUrl + '?after=' + after)
        .then(res => {
          const morePosts = requestResToPosts(res);
          setPosts(prevPosts => prevPosts.concat(morePosts));
          setLastRequestResult(res.data);
          setLoadingMore(false);
        });
    }
  }, [loadingMore]);

  function handleScroll() {
    const el = document.getElementById('root');
    if (el.getBoundingClientRect().bottom <= window.innerHeight) {
      // alert('header bottom reached');
      if(!loadingMore) setLoadingMore(true);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isLoading = error == null && posts == null;
  return (
    <div css={root}>
      <Typography variant="h2" gutterBottom>
        {`/r/${props.subreddit}`}
      </Typography>
      {isLoading && <CircularProgress css={progress} />}
      {posts && posts.map(post => <Post post={post} key={post.id} />)}
      {error && <ErrorDisplay error={error} />}
    </div>
  );
}

SubReddit.propTypes = {
  subreddit: PropTypes.string.isRequired
};

export default SubReddit;
