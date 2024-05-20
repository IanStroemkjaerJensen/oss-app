import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VotingButton = ({ suggestion }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <button>
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-orange-400 hover:cursor-pointer hover:text-red-200"
        />
      </button>
      <label>{suggestion.upvotes}</label>
      <label>Vote</label>
      <label>{suggestion.downvotes}</label>
      <button>
        <FontAwesomeIcon
          icon={faArrowDown}
          className="text-orange-200 hover:cursor-pointer hover:text-red-100"
        />
      </button>
    </div>
  );
};

export default VotingButton;
