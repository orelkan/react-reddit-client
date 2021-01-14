/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";
import Markdown from 'react-markdown';
import he from 'he';
import Video from './Video';
import AnimatedHover from './AnimatedHover';
import Collapse from '../shared/Collapse';

const content = css`
  display: flex;
  justify-content: center;
  padding: 0 2em 1em 2em;
  @media only screen and (max-width: 768px) {
    padding: 5%;
    padding-top: 0;
  }
`;
const sourceImg = css`
  max-height: 70vh;
  max-width: 100%;
  margin: auto 0;
  display: block;
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
const embed = css`
  max-width: 100%;
  width: 70vw;
  height: 80vh;
  justify-content: center;
  display: flex;
`;

// Stateless Component that displays the post media
function PostMedia({ post, expanded, hasImage,
  hasVideo, hasEmbed, hasText, htmlEmbed }) {

  // Only renders one content component, depending on the media type
  function renderContent() {
    if (hasVideo)
      return <Video src={post.media.reddit_video.fallback_url}/>;
    else if (hasEmbed)
      return <div css={embed} dangerouslySetInnerHTML={{__html: htmlEmbed}}/>;
    else if (hasImage)
      return (
        <AnimatedHover>
          <img src={post.url} alt='source' css={sourceImg}/>
        </AnimatedHover>
      );
    else if (hasText)
      return (
        <Typography variant='h5' css={text}>
          <Markdown source={he.decode(post.selftext)}/>
        </Typography>
      );
    else return null;
  }

  return (
    <Collapse isOpen={expanded}>
      <div css={content}>
        {renderContent()}
      </div>
    </Collapse>
  );
}

PostMedia.propTypes = {
  expanded: PropTypes.bool.isRequired,
  hasEmbed: PropTypes.bool.isRequired,
  hasImage: PropTypes.bool.isRequired,
  hasText: PropTypes.bool.isRequired,
  hasVideo: PropTypes.bool.isRequired,
  htmlEmbed: PropTypes.any,
  post: PropTypes.object.isRequired,
};

export default PostMedia;