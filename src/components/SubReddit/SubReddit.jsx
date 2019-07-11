/** @jsx jsx */
import { memo } from 'react';
import { useState, useEffect } from "react";
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import axios from "axios";
import { uniqBy } from 'lodash';
import { Typography, CircularProgress } from "@material-ui/core";
import PostsList from "../Post/PostsList";
import { redditUrl } from '../../consts';
import SubRedditHeader from './SubRedditHeader';

const root = css`
  margin: 2em 7%;
  @media only screen and (max-width: 768px) {
    margin: 2em 4%;
  }
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

const ErrorDisplay = ({ error }) => (
  <Typography variant="h3" gutterBottom>
    {error.response ? "No such Subreddit" : "Network Error"}
  </Typography>
);

const defaultFilter = 'hot';

function SubReddit(props) {
  const [posts, setPosts] = useState(null);
  const [loadingPosts, setLoadingPosts] = useState(false);
  const [lastRequestResult, setLastRequestResult] = useState(null);
  const [error, setError] = useState(null);
  const [loadingMore, setLoadingMore] = useState(false);
  const [filter, setFilter] = useState(defaultFilter);

  // If the filter has a time aspect it will be seperated by space
  // example: 'top hour'
  const [filterType, time] = filter.split(' ');
  const requestUrl = `${redditUrl}/r/${props.subreddit}/${filterType}.json` + 
  ((time) ? `?t=${time}` : '');
  // Transform the raw data by extracting the nested posts
  const requestResToPosts = res => res.data.data.children.map(obj => obj.data);
  const setUniquePosts = newPosts => setPosts(uniqBy(newPosts, 'id'));

  // Loading posts on subreddit or filter change
  useEffect(() => {
    setLoadingPosts(true);
    axios
      .get(requestUrl)
      .then(res => {
        const newPosts = requestResToPosts(res);
        setLoadingPosts(false);
        setLastRequestResult(res.data.data);
        setError(null);
        setUniquePosts(newPosts);
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
          setUniquePosts(posts && posts.concat(morePosts));
          setLastRequestResult(res.data.data);
          setLoadingMore(false);
        })
        .catch(() => {
          setLoadingMore(false);
        });
    } else {
      setLoadingMore(false);
    }
  }, [loadingMore, lastRequestResult, loadingPosts, requestUrl, posts]);

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
      <SubRedditHeader subreddit={props.subreddit} 
        filter={filter} onSelection={setFilter}/>
      {loadingPosts && <CircularProgress css={bigProgress}/>}
      <PostsList posts={posts} loadingPosts={loadingPosts}/>
      {error && !loadingPosts && <ErrorDisplay error={error}/>}
      {loadingMore && <CircularProgress css={centeredProgress}/>}
    </div>
  );
}

SubReddit.propTypes = {
  subreddit: PropTypes.string.isRequired
};

SubReddit.whyDidYouRender = true;

export default memo(SubReddit);
