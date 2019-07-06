/** @jsx jsx */
import { useState, useEffect, useMemo, memo } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Card, IconButton, Grow } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import he from 'he';
import Votes from "./Votes";
import TitleAndMetadata from "./TitleAndMetadata";
import Thumbnail from './Thumbnail';
import { useExpand } from '../shared/ExpandProvider';
import PostMedia from './PostMedia';

const rootCard = css`
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
const postSummary = css`
  display: flex;
  padding: 1em 3%;
`;
const exapndIcon = css`
  height: fit-content;
  margin: auto 0 auto auto;
  transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

function Post({ post, width, growIn = true}) {
  const [autoExpand] = useExpand();
  const [expanded, setExpanded] = useState(autoExpand);

  const deg = expanded ? 180 : 0;
  const expandIconDirection = css`
    transform: rotate(${deg}deg);
  `;

  const handleExpanded = () => setExpanded(!expanded);

  // Change Post expansion when auto expand chnages
  useEffect(() => {
    setExpanded(autoExpand);
  }, [autoExpand]);

  // Different media logic
  const hasThumbnail = Boolean(post.thumbnail.startsWith('http'));
  const urlWithoutQuery = post.url.split('?')[0];
  const hasImage = Boolean(['.jpg', '.jpeg', '.gif', '.png']
    .some(ext => urlWithoutQuery.endsWith(ext)));
  const hasText = Boolean(post.selftext && (post.selftext.length > 0));
  const hasVideo = Boolean(post.media && post.media.reddit_video && 
    post.media.reddit_video.fallback_url);
  const hasEmbed = Boolean(post.media_embed && post.media_embed.content);
  const canExpand = (hasImage || hasText || hasVideo || hasEmbed);
  
  // If it's a small screen, removes width and height from the media embed
  const htmlEmbed = useMemo(() => {
    const removeWidthIfSmall = hasEmbed && 
      width <= 768 ? 
      post.media_embed.content.replace(/width="[0-9]+"/, '')
        .replace(/height="[0-9]+"/, '') :
      post.media_embed.content;
    return hasEmbed && he.decode(removeWidthIfSmall);
  }, [width, hasEmbed, post]);

  return (
    <Grow in={growIn} timeout={500}>
      <Card css={rootCard}>
        <div css={postSummary}>
          <Votes votes={post.ups} />
          {hasThumbnail && 
          <Thumbnail src={post.thumbnail} 
            height={post.thumbnail_height} onClick={handleExpanded}/>}
          <TitleAndMetadata post={post}/>
          {canExpand && 
          <IconButton css={[exapndIcon, expandIconDirection]} 
            onClick={handleExpanded} aria-expanded={expanded}>
            <ExpandMoreIcon/>
          </IconButton>}
        </div>
        {canExpand && 
        <PostMedia post={post} expanded={expanded} htmlEmbed={htmlEmbed}
          hasEmbed={hasEmbed} hasImage={hasImage} 
          hasText={hasText} hasVideo={hasVideo} />}
      </Card>
    </Grow>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  growIn: PropTypes.bool,
  width: PropTypes.number.isRequired,
};

Post.whyDidYouRender = true;

export default memo(Post);
