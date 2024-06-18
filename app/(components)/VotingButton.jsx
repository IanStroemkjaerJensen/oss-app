"use client";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const VotingButton = ({ suggestion }) => {
  const [upvotes, setUpvotes] = useState(suggestion.upvotes);
  const [downvotes, setDownvotes] = useState(suggestion.downvotes);

  const onUpvoteClick = async () => {
    const newUpvotes = upvotes + 1;

    try {
      const response = await fetch(`/api/Suggestions/${suggestion._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          upvotes: newUpvotes,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update suggestion upvotes");
      }

      const data = await response.json();
      console.log("Suggestion updated successfully:", data);

      setUpvotes(newUpvotes);
    } catch (error) {
      console.error("Error updating suggestion:", error.message);
    }
  };

  const onDownvoteClick = async () => {
    const newDownvotes = downvotes + 1;

    try {
      const response = await fetch(`/api/Suggestions/${suggestion._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          downvotes: newDownvotes,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update suggestion downvotes");
      }

      const data = await response.json();
      console.log("Suggestion updated successfully:", data);

      setDownvotes(newDownvotes);
    } catch (error) {
      console.error("Error updating suggestion:", error.message);
    }
  };

  const votecount = upvotes - downvotes;

  return (
    <div className="flex flex-col items-center space-y-1">
      <button onClick={onUpvoteClick}>
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-orange-400 hover:cursor-pointer hover:text-red-200"
        />
      </button>
      <label>{votecount}</label>
      <label>Vote</label>
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
