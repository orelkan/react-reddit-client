/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";

const video = css`
  max-height: 30em;
`;

function Video({src}) {
  return (
    <video muted loop poster autoPlay controls css={video}>
      <source src={src}/>
    </video>
  );
}

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default Video;