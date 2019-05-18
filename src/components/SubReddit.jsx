/** @jsx jsx */
import { memo } from 'react';
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
const centeredProgress = css`
  display: flex;
  flex-direction: column;
  margin: auto;
`;
const bigProgress = css`
  ${centeredProgress};
  width: 8em !important;
  height: 8em !important;
  margin-top: 3em;
`;

const ErrorDisplay = () => (
  <Typography variant="h3" gutterBottom>
    No such Subreddit
  </Typography>
);

ErrorDisplay.propTypes = {
  error: PropTypes.object.isRequired
};

function SubReddit(props) {
  const [posts, setPosts] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [lastRequestResult, setLastRequestResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const filter = 'top';
  const requestUrl = `${redditUrl}/r/${props.subreddit}/${filter}.json`;
  // Transform the raw data by extracting the nested posts
  const requestResToPosts = res => res.data.data.children.map(obj => obj.data);

  // Loading posts on subreddit or filter change
  useEffect(() => {
    setLoadingPosts(true);
    axios
      .get(requestUrl)
      .then(res => {
        const posts = requestResToPosts(res);
        setLoadingPosts(false);
        setLastRequestResult(res.data.data);
        setError(null);
        setPosts(posts);
      })
      .catch(err => {
        setLoadingPosts(false);
        setError(err);
        setPosts(null);
      });
  }, [props.subreddit, requestUrl]);
  
  // Loading more posts when scrolled to the bottom of the page
  useEffect(() => {
    if (loadingMore && !loadingPosts && lastRequestResult.after) {
      const after = lastRequestResult.after;
      axios
        .get(requestUrl + '?after=' + after)
        .then(res => {
          const morePosts = requestResToPosts(res);
          setPosts(prevPosts => prevPosts && prevPosts.concat(morePosts));
          setLastRequestResult(res.data.data);
          setLoadingMore(false);
        })
        .catch(() => {
          setLoadingMore(false);
        });
    } else {
      setLoadingMore(false);
    }
  }, [loadingMore, lastRequestResult, loadingPosts, requestUrl]);

  // Setting the scroll event listener 
  useEffect(() => {
    function handleScroll() {
      const el = document.getElementById('root');
      if (!loadingMore && 
          el.getBoundingClientRect().bottom <= window.innerHeight) {
        setLoadingMore(true);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadingMore]);

  return (
    <div css={root}>
      <Typography variant="h2" gutterBottom>
        {`/r/${props.subreddit}`}
      </Typography>
      {loadingPosts && <CircularProgress css={bigProgress} />}
      {posts && posts.map(post => <Post post={post} key={post.id} />)}
      {error && <ErrorDisplay/>}
      {loadingMore && <CircularProgress css={centeredProgress}/>}
    </div>
  );
}

SubReddit.propTypes = {
  subreddit: PropTypes.string.isRequired
};

export default memo(SubReddit);
