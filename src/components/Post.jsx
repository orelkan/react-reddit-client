/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { useSpring, animated, config } from "react-spring";
import { Card, Typography } from "@material-ui/core";
import Votes from "./Votes";

const card = css`
  min-width: 275px;
  margin: 1em auto;
`;
const title = css`
  margin: auto 0;
`;
const cardContent = css`
  display: flex;
  padding: 0.5em 1em;
`;
const img = css`
  margin: 1em 2em 1em 0;
  width: auto;
  max-height: 7em;
`;
const root = css`
  h5 {
    font-size: 13pt;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
];
const trans = (x, y, s) => `perspective(1200px) rotateX(${x}deg) scale(${s})`;

function Post({ post }) {
  const animationProps = useSpring({
    config: config.slow,
    opacity: 1,
    paddingLeft: 0,
    from: { opacity: 0, paddingLeft: 200 }
  });
  const [hoverProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  const postLink = `https://www.reddit.com${post.permalink}`;
  const hasThumbnail = post.thumbnail.startsWith('http');

  return (
    <animated.div css={root} style={animationProps}>
      <animated.div
        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{ transform: hoverProps.xys.interpolate(trans) }}
      >
        <Card css={card}>
          <div css={cardContent}>
            <Votes votes={post.ups} />
            {hasThumbnail && 
            <img src={post.thumbnail} height={post.thumbnail_height} 
              alt='thumbnail' css={img}/>}
            <Typography variant="h5" css={title}>
              <a href={postLink} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a>
            </Typography>
          </div>
        </Card>
      </animated.div>
    </animated.div>
  );
}

Post.propTypes = {
  post: PropTypes.object.isRequired
};

export default Post;
