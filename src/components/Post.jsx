/** @jsx jsx */
import { useState } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Card, Typography, IconButton, Collapse, Grow } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Markdown from 'react-markdown';
import Votes from "./Votes";
import TitleAndMetadata from "./TitleAndMetadata";
import Thumbnail from './Thumbnail';

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
const cardContent = css`
  display: flex;
  padding: 0.5em 3%;
`;
const sourceImg = css`
  max-height: 30em;
  margin: auto 0;
  display: block;
`;
const exapnd = css`
  height: fit-content;
  margin: auto 0 auto auto;
`;
const collapse = css`
  display: flex;
  justify-content: center;
`;
const collapseContent = css`
  padding: 1em 2em;
`;

function Post({ post }) {
  const [expanded, setExpanded] = useState(false);
  const handleExpanded = () => setExpanded(!expanded);
  
  const hasThumbnail = post.thumbnail.startsWith('http');
  const hasImage = ['.jpg', '.gif', '.png']
                  .some(ext => post.url.endsWith(ext));
  const hasText = post.selftext && post.selftext.length > 0;

  return (
    <Grow in={true} css={root} timeout={800}>
      <Card css={card}>
        <div css={cardContent}>
          <Votes votes={post.ups} />
          {hasThumbnail && 
          <Thumbnail src={post.thumbnail} 
            height={post.thumbnail_height} onClick={handleExpanded} />}
          <TitleAndMetadata post={post}/>
          {(hasImage || hasText) && 
          <IconButton css={exapnd} onClick={handleExpanded} aria-expanded={expanded}>
            <ExpandMoreIcon/>
          </IconButton>}
        </div>
        <Collapse in={expanded} timeout="auto" unmountOnExit css={collapse}>
          {hasImage && 
          <img src={post.url} alt='source' css={sourceImg}/>}
          <div css={collapseContent}>
            {hasText && 
            <Typography variant='h5'>
              <Markdown source={post.selftext}/>
            </Typography>}
          </div>
        </Collapse>
      </Card>
    </Grow>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
