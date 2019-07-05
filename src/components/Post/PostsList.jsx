/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx } from '@emotion/core';
import PropTypes from "prop-types";
import Post from './Post';

function PostsList({ posts, loadingPosts }) {
  const [width, setWidth] = useState(window.innerWidth);

  // Window width listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    posts && posts.map(post => 
      <Post post={post} key={post.id} growIn={!loadingPosts} width={width}/>)
  );
}

PostsList.propTypes = {
  loadingPosts: PropTypes.bool.isRequired,
  posts: PropTypes.array,
};

export default PostsList;