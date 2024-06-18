import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpvotesBlock = ({ suggestion }) => {
  const votecount = suggestion.upvotes - suggestion.downvotes;
  return (
    <div>
      <label className="text-sm p-1 m-1 text-white">{votecount}</label>
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <label className="text-sm m-1 text-white">&apos;s</label>
    </div>
  );
};

export default UpvotesBlock;
