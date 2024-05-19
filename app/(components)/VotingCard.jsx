import React from "react";
import VotingButton from "./VotingButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";
import UpvotesBlock from "./UpvotesBlock";

const VotingCard = ({ children }) => {
  return (
    <div className="relative flex p-1 m-1">
      <div className="flex-1">{children}</div>
      <div className="flex flex-col justify-center ml-2">
        <VotingButton />
      </div>
      <div className="absolute bottom-0 left-[60%] transform translate-y-[70%] flex items-center">
        <UpvotesBlock />
      </div>
    </div>
  );
};

export default VotingCard;
