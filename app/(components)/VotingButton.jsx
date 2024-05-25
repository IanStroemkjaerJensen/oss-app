"use client";

import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const VotingButton = ({ suggestion }) => {
  const [upvotes, setUpvotes] = useState(suggestion.upvotes);
  const [downvotes, setDownvotes] = useState(suggestion.downvotes);

  const onUpvoteClick = () => {
    setUpvotes(upvotes + 1);
  };

  const onDownvoteClick = () => {
    setDownvotes(downvotes + 1);
  };

  //Todo - Create update function that can be used for updating upvotes

  return (
    <div className="flex flex-col items-center space-y-1">
      <button onClick={onUpvoteClick}>
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-orange-400 hover:cursor-pointer hover:text-red-200"
        />
      </button>
      <label>{suggestion.upvotes}</label>
      <label>Vote</label>
      <label>{suggestion.downvotes}</label>
      <button onClick={onDownvoteClick}>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-orange-200 hover:cursor-pointer hover:text-red-100"
        />
      </button>
    </div>
  );
};

export default VotingButton;
