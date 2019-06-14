/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Typography, FormControl, InputLabel,
  Select, OutlinedInput, MenuItem } from "@material-ui/core";
import { filters } from '../../consts';

const root = css`
  display: flex;
  justify-content: space-between;
`;
const formControl = css`
  min-width: 120px;
`;

function SubRedditHeader({subreddit, filter, onSelection}) {
  return (
    <div css={root}>
      <Typography variant="h2">
        {`/r/${subreddit}`}
      </Typography>
      <FormControl variant="outlined" css={formControl}>
        <InputLabel>Order</InputLabel>
        <Select
          value={filter}
          onChange={e => onSelection(e.target.value)}
          input={
            <OutlinedInput labelWidth={43}/>
          }
        >
          {filters.map(({label, value}) => 
            <MenuItem key={value} value={value}>{label}</MenuItem>
          )}
        </Select>
      </FormControl>
    </div>
  );
}

SubRedditHeader.propTypes = {
  subreddit: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default SubRedditHeader;