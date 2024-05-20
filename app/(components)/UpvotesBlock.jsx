import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const UpvotesBlock = () => {
  return (
    <div>
      <label className="text-sm p-1 m-1 text-white">5</label>
      <FontAwesomeIcon icon={faFire} className="text-orange-300" />
      <label className="text-sm m-1 text-white">&apos;s</label>
    </div>
  );
};

export default UpvotesBlock;
