import React from 'react';
import PropTypes from 'prop-types';
import {useSpring, animated, config} from 'react-spring';
import { Card, CardContent, Typography, withStyles } from '@material-ui/core';
import Votes from './Votes';
import './Reddit.css';

const styles = {
  card: {
    minWidth: 275,
    margin: '1em auto'
  },
  title: {
    margin: 'auto 0',
  },
  cardContent: {
    display: 'flex',
    padding: '0.5em 1em'
  }
};

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20, 1.1];
const trans = (x, y, s) => 
  `perspective(1200px) rotateX(${x}deg) scale(${s})`;

function Post(props) {
  const { classes, post } = props;
  const animationProps = useSpring({
    config: config.slow,
    opacity: 1, paddingLeft: 0,
    from: {opacity: 0, paddingLeft: 200}
  });
  const [hoverProps, set] = useSpring(() => 
    ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }));

  const postLink = `https://www.reddit.com${post.permalink}`;

  return (
    <animated.div className='post' style={animationProps}>
      <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: hoverProps.xys.interpolate(trans) }} >
        <Card className={classes.card}>
          <div className={classes.cardContent}>
            <Votes votes={post.ups}/>
            <Typography variant="h5" className={classes.title}>
              <a href={postLink} target="_blank" rel="noopener noreferrer">
                {post.title}
              </a> 
            </Typography>
          </div>
        </Card>
      </animated.div>
    </animated.div>
  )
}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default withStyles(styles)(Post);