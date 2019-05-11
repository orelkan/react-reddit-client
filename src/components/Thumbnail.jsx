/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";

const thumbnail = css`
  margin: auto 4% auto 0;
  width: auto;
  max-height: 7em;
  padding: 1em 0;

  &:hover {
    cursor: pointer;
  }
`;

function Thumbnail(props){
  return (
    <img alt='thumbnail' css={thumbnail} {...props} />
  );
}

Thumbnail.propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Thumbnail;