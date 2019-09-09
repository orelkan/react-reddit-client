import React from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";
import { useMeasure } from './useMeasure';

function Collapse({ isOpen, children }) {
  const [bind, {height}] = useMeasure();
  const props = useSpring({
    height: (isOpen ? height : 0),
    from: {height: (isOpen ? 0 : height)}
  });

  return (
    <animated.div style={props}>
      <div {...bind}>
        {children}
      </div>
    </animated.div>
  );
}

Collapse.propTypes = {
  children: PropTypes.any,
  isOpen: PropTypes.bool.isRequired,
};

export default Collapse;