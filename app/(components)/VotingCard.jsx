import React from "react";
import VotingButton from "./VotingButton";

const VotingCard = ({ children }) => {
  return (
    <div className="flex p-1 m-1">
      <div className="flex-1">{children}</div>
      <div className="flex flex-col justify-center ml-2">
        <VotingButton />
      </div>
    </div>
  );
};

export default VotingCard;
