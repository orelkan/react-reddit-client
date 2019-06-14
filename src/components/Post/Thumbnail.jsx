/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";

const thumbnail = css`
  margin: auto 4% auto 0;
  width: auto;
  max-height: 7em;

  &:hover {
    cursor: pointer;
  }

  @media only screen and (max-width: 768px) {
    display: none;
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
};

export default Thumbnail;