/** @jsx jsx */
import { useState, useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Card, Typography, IconButton, Collapse, Grow } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Markdown from 'react-markdown';
import he from 'he';
import Votes from "./Votes";
import TitleAndMetadata from "./TitleAndMetadata";
import Thumbnail from './Thumbnail';
import Video from './Video';
import AnimatedHover from './AnimatedHover';
import { useExpand } from '../shared/ExpandProvider';

const card = css`
  min-width: 275px;
  margin: 1em auto;
  h5 {
    font-size: 13pt;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
const cardContent = css`
  display: flex;
  padding: 1em 3%;
`;
const sourceImg = css`
  max-height: 30em;
  max-width: 100%;
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
  padding: 0 2em 1em 2em;  
  @media only screen and (max-width: 768px) {
    padding: 5%;
    padding-top: 0;
  }
`;
const text = css`
  overflow: auto;
  @media only screen and (max-width: 768px) {
    max-width: 85%;
    margin: 0 auto;
  }
  p {
    margin-top: 0;
  }
`;

function Post({ post, growIn = true}) {
  const [autoExpand] = useExpand();
  const [expanded, setExpanded] = useState(autoExpand);
  const [width, setWidth] = useState(window.innerWidth);
  const handleExpanded = () => setExpanded(!expanded);
  
  // Change Post expansion when auto expand chnages
  useEffect(() => {
    setExpanded(autoExpand);
  }, [autoExpand]);

  // Window width listener
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const hasThumbnail = post.thumbnail.startsWith('http');
  const urlWithoutQuery = post.url.split('?')[0];
  const hasImage = ['.jpg', '.jpeg', '.gif', '.png']
    .some(ext => urlWithoutQuery.endsWith(ext));
  const hasText = post.selftext && post.selftext.length > 0;
  const hasVideo = post.media && post.media.reddit_video && 
    post.media.reddit_video.fallback_url;
  const hasEmbed = post.media_embed && post.media_embed.content;
  const canExpand = (hasImage || hasText || hasVideo || hasEmbed);
  
  // If it's a small screen, removes width and height from the media embed
  const removeWidthIfSmall = hasEmbed && 
    width <= 768 ? 
    post.media_embed.content.replace(/width="[0-9]+"/, '')
      .replace(/height="[0-9]+"/, '') :
    post.media_embed.content;
  const htmlEmbed = hasEmbed && he.decode(removeWidthIfSmall);

  return (
    <Grow in={growIn} timeout={500}>
      <Card css={card}>
        <div css={cardContent}>
          <Votes votes={post.ups} />
          {hasThumbnail && 
          <Thumbnail src={post.thumbnail} 
            height={post.thumbnail_height} onClick={handleExpanded}/>}
          <TitleAndMetadata post={post}/>
          {canExpand && 
          <IconButton css={exapnd} onClick={handleExpanded} aria-expanded={expanded}>
            <ExpandMoreIcon/>
          </IconButton>}
        </div>
        {canExpand && 
        <Collapse in={expanded} timeout="auto" unmountOnExit css={collapse}>
          <div css={collapseContent}>
            {hasImage && 
            <AnimatedHover>
              <img src={post.url} alt='source' css={sourceImg}/>
            </AnimatedHover>}
            {hasVideo && <Video src={post.media.reddit_video.fallback_url}/>}
            {hasEmbed && 
            <div dangerouslySetInnerHTML={{__html: htmlEmbed}}/>}
            {hasText && 
            <Typography variant='h5' css={text}>
              <Markdown source={he.decode(post.selftext)}/>
            </Typography>}
          </div>
        </Collapse>}
      </Card>
    </Grow>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  growIn: PropTypes.bool,
};

export default Post;
