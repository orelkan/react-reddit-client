import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

const calc = (x, y) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.25
];
const trans = (x, y, s) => 
  `perspective(1200px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function AnimatedHover (props) {
  const [hoverProps, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 3, tension: 400, friction: 40 }
  }));

  return (
    <animated.div
      onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: hoverProps.xys.interpolate(trans) }}
    > 
      {props.children}
    </animated.div>
  );
}

AnimatedHover.propTypes = {
  children: PropTypes.object.isRequired
};

export default AnimatedHover;