/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Card, Typography, IconButton, Collapse, Grow } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Votes from "./Votes";
// import AnimatedHover from "./AnimatedHover";

const root = css`
  h5 {
    font-size: 13pt;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;
const card = css`
  min-width: 275px;
  margin: 1em auto;
`;
const title = css`
  margin: auto 0;
`;
const cardContent = css`
  display: flex;
  padding: 0.5em 3%;
`;
const thumbnail = css`
  margin: auto 4% auto 0;
  width: auto;
  max-height: 7em;
  padding: 1em 0;
`;
const sourceImg = css`
  max-height: 30em;
  margin: auto 0;
  display: block;
  padding-bottom: 9%;
`;
const exapnd = css`
  height: fit-content;
  margin: auto 0 auto auto;
`;
const collapse = css`
  display: flex;
  justify-content: center;
`;

function Post({ post }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => setExpanded(!expanded);
  
  const postLink = `https://www.reddit.com${post.permalink}`;
  const hasThumbnail = post.thumbnail.startsWith('http');
  const isImage = post.url.endsWith('.jpg');
  return (
    <Grow in={true} css={root} timeout={800}>
      <Card css={card}>
        <div css={cardContent}>
          <Votes votes={post.ups} />
          {hasThumbnail && 
          <img src={post.thumbnail} height={post.thumbnail_height} 
            alt='thumbnail' css={thumbnail}/>}
          <Typography variant="h5" css={title}>
            <a href={postLink} target="_blank" rel="noopener noreferrer">
              {post.title}
            </a>
          </Typography>
          {isImage && 
          <IconButton css={exapnd} onClick={handleExpanded} aria-expanded={expanded}>
            <ExpandMoreIcon/>
          </IconButton>}
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit css={collapse}>
          <img src={post.url} alt='source' css={sourceImg}/>
        </Collapse>
      </Card>
    </Grow>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
