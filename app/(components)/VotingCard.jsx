"use client";

import React from "react";
import VotingButton from "./VotingButton";
import UpvotesBlock from "./UpvotesBlock";

const VotingCard = ({ children, suggestion }) => {
  return (
    <div className="relative flex flex-col md:flex-row p-1 m-1 ">
      <div className="flex-1">{children}</div>
      <div className="flex flex-col justify-center ml-3">
        <VotingButton suggestion={suggestion} />
      </div>
      <div className="absolute bottom-0 left-[60%] transform translate-y-[100%] flex items-center ">
        <UpvotesBlock suggestion={suggestion} />
      </div>
    </div>
  );
};

export default VotingCard;
