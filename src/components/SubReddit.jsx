/** @jsx jsx */
import { useState, useEffect } from "react";
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import axios from "axios";
import { Typography, CircularProgress } from "@material-ui/core";
import Post from "./Post";

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
  const [error, setError] = useState(null);

  useEffect(() => {
    // Remove the 'www.' to cause a CORS error (and see the error state)
    axios
      .get(`https://www.reddit.com/r/${props.subreddit}/top.json`)
      .then(res => {
        // Transform the raw data by extracting the nested posts
        const posts = res.data.data.children.map(obj => obj.data);
        setPosts(posts);
        setError(null);
      })
      .catch(err => {
        setError(err);
        setPosts(null);
      });
  }, [props.subreddit]);

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
