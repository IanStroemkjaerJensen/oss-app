import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PopularityDisplay = ({ suggestion }) => {
  const votecount = suggestion.upvotes - suggestion.downvotes;
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          votecount > 0 ? "text-orange-200 " : "text-slate-200"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          votecount > 2 ? "text-orange-300 " : "text-slate-300"
        }`}
      />

      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          votecount > 4 ? "text-orange-400 " : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          votecount > 6 ? "text-orange-500 " : "text-slate-500"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          votecount > 8 ? "text-orange-600 " : "text-slate-600"
        }`}
      />
    </div>
  );
};

export default PopularityDisplay;
