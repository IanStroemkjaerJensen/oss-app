import { faArrowUp, faArrowsUpDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const VotingButton = () => {
  return (
    <div className="flex flex-col">
      <button className="mb-1">
        <FontAwesomeIcon
          icon={faArrowUp}
          className="text-orange-400 hover:cursor-pointer hover:text-red-200"
        />
      </button>
      <button>
        <FontAwesomeIcon
          icon={faArrowsUpDown}
          className="text-orange-200 hover:cursor-pointer hover:text-red-100"
        />
      </button>
    </div>
  );
};

export default VotingButton;
