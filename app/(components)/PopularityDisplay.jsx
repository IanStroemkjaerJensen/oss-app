import { faFire } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function PopularityDisplay() {
  return (
    <div className="flex justify-start align-baseline">
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
      <FontAwesomeIcon icon={faFire} className="text-orange-400" />
    </div>
  );
}

export default PopularityDisplay;
