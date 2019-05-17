/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import {Typography} from '@material-ui/core';
import Markdown from 'react-markdown';

const root = css`
  margin: auto 0;
  h4 {
    font-size: 12pt;
  }
`;
const title = css`
  margin-bottom: 1em;
`;

function TitleAndMetadata({post}) {
  const postLink = `https://www.reddit.com${post.permalink}`;

  return (
    <div css={root}>
      <Typography variant="h5" css={title}>
        <a href={postLink} target="_blank" rel="noopener noreferrer">
          {/* <Markdown source={post.title}/> */}
          {post.title}
        </a>
      </Typography>
      <div>
        <Typography variant='h4'>
          {post.subreddit_name_prefixed}
        </Typography>
      </div>
    </div>
  );
}

TitleAndMetadata.propTypes = {
  post: PropTypes.object.isRequired
};

export default TitleAndMetadata;