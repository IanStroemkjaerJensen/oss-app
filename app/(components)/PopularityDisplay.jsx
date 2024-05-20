import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const PopularityDisplay = ({ upvotes }) => {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          upvotes > 0 ? "text-orange-200 " : "text-slate-200"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          upvotes > 2 ? "text-orange-300 " : "text-slate-300"
        }`}
      />

      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          upvotes > 4 ? "text-orange-400 " : "text-slate-400"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          upvotes > 6 ? "text-orange-500 " : "text-slate-500"
        }`}
      />
      <FontAwesomeIcon
        icon={faFire}
        className={`pr-1 ${
          upvotes > 8 ? "text-orange-600 " : "text-slate-600"
        }`}
      />
    </div>
  );
};

export default PopularityDisplay;
