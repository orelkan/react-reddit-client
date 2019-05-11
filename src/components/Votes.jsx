import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles, Typography, IconButton } from "@material-ui/core";
import UpVote from "@material-ui/icons/ExpandLess";
import DownVote from "@material-ui/icons/ExpandMore";

const styles = {
  iconButton: {
    padding: "7px 0"
  },
  upvote: {
    color: "#FF8b60"
  },
  downvote: {
    color: "#9494FF"
  }
};

const VoteState = {
  UPVOTE: 1,
  NO_VOTE: 0,
  DOWNVOTE: -1
};

function Votes(props) {
  const [voteState, setVoteState] = useState(VoteState.NO_VOTE);

  const handleVote = nextState => () => {
    if (nextState === voteState) setVoteState(VoteState.NO_VOTE);
    else setVoteState(nextState);
  };

  const upvoteColor = voteState === VoteState.UPVOTE ? styles.upvote : {};
  const downvoteColor = voteState === VoteState.DOWNVOTE ? styles.downvote : {};

  return (
    <div className="votes">
      <IconButton
        style={{ ...styles.iconButton, ...upvoteColor }}
        aria-label="Upvote"
        onClick={handleVote(VoteState.UPVOTE)}
      >
        <UpVote />
      </IconButton>

      <Typography variant="h5" style={{ ...upvoteColor, ...downvoteColor }}>
        {props.votes + voteState}
      </Typography>

      <IconButton
        style={{ ...styles.iconButton, ...downvoteColor }}
        aria-label="Downvote"
        onClick={handleVote(VoteState.DOWNVOTE)}
      >
        <DownVote />
      </IconButton>
    </div>
  );
}

Votes.propTypes = {
  votes: PropTypes.number.isRequired
};

export default withStyles(styles)(Votes);
