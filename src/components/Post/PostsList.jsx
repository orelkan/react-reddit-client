/** @jsx jsx */
import { memo } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from "prop-types";
import Post from './Post';

function PostsList({ posts, loadingPosts }) {
  return (
    posts && posts.map(post =>
      <Post post={post} key={post.id} growIn={!loadingPosts}/>)
  );
}

PostsList.propTypes = {
  loadingPosts: PropTypes.bool.isRequired,
  posts: PropTypes.array,
};

PostsList.whyDidYouRender = true;

export default memo(PostsList);