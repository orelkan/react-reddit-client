/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from "prop-types";
import { Typography, FormControl, InputLabel,
  Select, OutlinedInput, MenuItem, Grid } from "@material-ui/core";
import { filters } from '../../consts';

const formControl = css`
  min-width: 120px;
`;
const rowPadding = css`
  @media only screen and (max-width: 768px) {
    padding-bottom: 1em;
  }
`;
const breakWord = css`
  overflow-wrap: break-word;
`;

function SubRedditHeader({ subreddit, filter, onSelection }) {
  return (
    <Grid container justify="space-between">
      <Grid item xs={12} sm={6} md={6} lg={6} css={rowPadding}>
        <Typography variant="h2" css={breakWord}>
          {`/r/${subreddit}`}
        </Typography>
      </Grid>
      <Grid item>
        <FormControl variant="outlined" css={formControl}>
          <InputLabel>Order</InputLabel>
          <Select
            value={filter}
            onChange={e => onSelection(e.target.value)}
            input={
              <OutlinedInput labelWidth={43}/>
            }
          >
            {filters.map(({ label, value }) => 
              <MenuItem key={value} value={value}>{label}</MenuItem>
            )}
          </Select>
        </FormControl>
      </Grid> 
    </Grid>
  );
}

SubRedditHeader.propTypes = {
  subreddit: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default SubRedditHeader;