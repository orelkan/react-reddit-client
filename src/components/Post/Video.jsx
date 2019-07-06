/** @jsx jsx */
import { memo } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";

const video = css`
  max-height: 30em;
  max-width: 100%;
`;

function Video({src}) {
  return (
    <video muted loop autoPlay controls css={video}>
      <source src={src}/>
    </video>
  );
}

Video.propTypes = {
  src: PropTypes.string.isRequired
};

export default memo(Video);