import { faDeleteLeft, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const DeleteButton = () => {
  return (
    <button>
      <FontAwesomeIcon
        icon={faDeleteLeft}
        className="text-red-400 hover:cursor-pointer hover:text-red-200"
      />
    </button>
  );
};

export default DeleteButton;
